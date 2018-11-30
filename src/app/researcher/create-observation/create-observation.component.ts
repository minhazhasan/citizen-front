import { Component, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatSnackBar } from '@angular/material';
import { Tags } from 'src/app/models/tags.model';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observation } from 'src/app/models/observation.model';
import { ObservationService } from 'src/app/services/observation.service';
import { Fields } from 'src/app/models/field.model';
import { Url } from 'url-parse';
import { GoogleAppServiceService } from 'src/app/services/google-app-service.service';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-create-observation',
  templateUrl: './create-observation.component.html',
  styleUrls: ['./create-observation.component.scss']
})
export class CreateObservationComponent implements OnInit {

  fieldsType = new Map([
    ['File', 1],
    ['Number', 2],
    ['Text', 3]
  ]);

  fields: Fields[] = [];



  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  manualSelection: Boolean;
  importSelection: Boolean;
  disableObservationForm: Boolean;
  disabledOpacity: Number;

  @ViewChild("createObservationForm") createObservationForm: NgForm;
  @ViewChild("addFieldsFrom") addFieldsFrom: NgForm;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  tags: Tags[] = [];
  data: any;


  observation: Observation;

  constructor(private route: Router, private fb: FormBuilder, public snackBar: MatSnackBar,
    private observationService: ObservationService,
    private googleAppService: GoogleAppServiceService,
    private addRecordService: RecordService) {
    this.manualSelection = false;
    this.importSelection = false;
    this.observation = new Observation();
  }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push({ tag: value.trim() });
    }

    if (input) {
      input.value = '';
    }

  }

  remove(tag: Tags): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  onSubmitObservation(observation) {
    console.log(observation.title);
    this.observation.title = observation['title'];
    this.observation.description = observation['description'];
    this.observation.category = 1;
    this.observation.tags = this.tags.map(t => { return t.tag });
    this.disableForm()
    // console.log(this.observation);
    // console.log(observationForm.value);

  }

  manualSelectionPage() {
    this.manualSelection = true;
    this.importSelection = false;
  }

  importSelectionPage() {
    this.importSelection = true;
    this.manualSelection = false;
  }

  addField(fieldForm: NgForm) {
    this.fields.push(fieldForm.value);
    fieldForm.reset();
    console.log(this.fields);
  }

  removeField(field) {
    let index = this.fields.indexOf(field);
    this.fields.splice(index, 1);
  }

  addObservationManually(addFieldsFrom: NgForm) {
    this.observation.fields = this.fields.map(val => <Fields>{
      fieldTitle: val.fieldTitle,
      fieldType: val.fieldType['value']
    });
    console.log(JSON.stringify(this.observation));

    this.observationService.addObservation(this.observation)
      .subscribe(data => {
        console.log(data);
        this.snackBarMessage('Observation added successfully', 'Success');
      },
        (error: Response) => {
          console.log(error);
          this.snackBarMessage('Failed to add Observation', 'Failed');
        });

    addFieldsFrom.resetForm();
    this.createObservationForm.resetForm();
    this.manualSelection = false;
    this.enableForm();
    // this.route.navigateByUrl('/citizenpanel/list');
  }

  addObservationByImport(urlString: string) {
    let url: string = urlString['urlInput'].toString();
    let idExp = new RegExp(/[-\w]{25,}/);
    let urlId = idExp.exec(url)[0];

    // let prr = this.googleAppService.load(urlId)
    //   .then( (data) => {
    //     return this.data = data;
    //     // for(let v of data['0']){
    //     //   console.log(v);
    //     // }
    //   },
    //   (error) => {
    //     console.log(error);
    //   })

    // this.googleAppService.load(urlId)
    //   .subscribe(data => {
    //     this.data = data;
    //     // console.log(data[0]);
    //     let singleSubject = data[0];
    //       for(let key in singleSubject){
    //         let val = {'fieldTitle': key, 'fieldType': 3}
    //         this.fields.push(val)
    //       }

    //       this.observation.fields = this.fields;
    //       this.observation.category = 1;
    //       console.log(this.observation);
    //       this.observationService.addObservation(this.observation)
    //         .subscribe(res => {
    //           console.log(res['observationId']);
    //           this.snackBarMessage('Observation created Successfully', 'success');
    //           // let record = {
    //           //   'observationId': res['observationId'],
    //           //   'data': this.data.forEach(element => {
    //           //     return element 
    //           //   })
    //           // }
    //           // console.log(record);
    //           // this.addRecordService.addRecord(record).subscribe(res => {
    //           //   console.log('record added successfully');
    //           // })
    //         },
    //         (err) => {
    //           this.snackBarMessage('Observation can\'t be added', 'failed' );
    //         })

    //       // console.log(this.fields);
    //   },
    //   (error) => {
    //     console.log('Can\'t load data');
    //   },
    //   () =>{

    //   })


    let message = '';
    let data = {}

    this.observation.fields = [];

    this.observationService.addObservation(this.observation)
      .subscribe(res => {
        // console.log(res);
        data = {
          'observationId': res['observationId'],
          'spreadSheetId': urlId
        }
        this.googleAppService.importSreadsheet(data)
          .subscribe(resImport => {
            this.snackBarMessage(resImport.toString(), 'Success')
          },
            (error) => {
              if (error.status === 400)
                message = error.error.error.toString().split();
                this.snackBarMessage(message, "Falied");
                console.log(error);
            })
        console.log(data);
        this.snackBarMessage('Observation imported successfully', 'Success');
      },
      (error: Response) => {
        console.log(error);
        this.snackBarMessage('Failed to add Observation', 'Failed');
      });
  }

  disableForm() {
    this.disableObservationForm = true;
    this.disabledOpacity = 0.5;
  }

  enableForm() {
    this.disableObservationForm = false;
    this.disabledOpacity = 1;
  }

  cancelField() {
    this.fields = [];
    this.manualSelection = false;
    this.enableForm();
  }

  cancelImport() {
    this.enableForm();
    this.importSelection = false;
  }
  snackBarMessage(message, action) {
    this.snackBar.open(message, action, {
      duration: 5500
    });
  }

  // onNoField(){
  //   if(this.fields.length === 0 && this.addFieldsFrom.invalid) return true

  //   return false;
  // }
}
