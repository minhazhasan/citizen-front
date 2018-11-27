import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observation } from 'src/app/models/observation.model';
import { MatChipInputEvent, MatSnackBar } from '@angular/material';
import { Tags } from 'src/app/models/tags.model';
import { NgForm } from '@angular/forms';
import { ObservationService } from 'src/app/services/observation.service';

@Component({
  selector: 'app-update-observation',
  templateUrl: './update-observation.component.html',
  styleUrls: ['./update-observation.component.css']
})
export class UpdateObservationComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  title: any;
  description: any;
  tagVal: any;

  @ViewChild('updateObservationForm') updateObservationForm: NgForm;

  observationDetails: Observation;
  tags = [];
  fields = [];
  fieldsType = new Map([
    ['File', 1],
    ['Number', 2],
    ['Text', 3]
  ]);

  constructor(private route: ActivatedRoute, private observationService: ObservationService, 
    public snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {

    this.observationDetails = new Observation();
    this.observationDetails = this.route.snapshot.data.data.observations[0];
    this.title = this.observationDetails.title;
    this.description = this.observationDetails.description;

    // this.title.nativeElement.value = this.observationDetails.title;

    for(let val of this.observationDetails.fields){
      
      let valType = '';
      switch(val['type']){
        case 1:
          valType = 'File';
          break;
        case 2:
          valType = 'Number';
          break;
        case 3:
          valType = 'Text';
          break;
        default:
          break;
      }
      let data = {'fieldTitle': val['title'], 'fieldType': {'key': valType, 'value': val['type']}};
      this.fields.push(data)
    }

    this.tags = this.observationDetails.tags ? this.observationDetails.tags : [];

    console.log(this.tags);
    
  };

  ngAfterViewInit(): void {
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

  };

  remove(tag: Tags): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  };

  addField(fieldForm: NgForm) {
    this.fields.push(fieldForm.value);
    fieldForm.reset();
    console.log(this.fields);
  };

  removeField(field) {
    let index = this.fields.indexOf(field);
    this.fields.splice(index, 1);
  };

  addTag(){
    this.tags.push(this.tagVal);
    this.tagVal = '';
   
  };

  removeTag(tag){
    let index = this.tags.indexOf(tag);
    this.tags.splice(index, 1);
  };

  onUpdateObservation(val1){
    let data = {
      'observationId': this.observationDetails.observationId,
      'title': val1.title,
      'description': val1.description,
      'tags': this.tags
    }

    console.log(data);
    this.observationService.updateObservation(data)
    .subscribe(res =>{
      this.snackBarMessage('Observation Updated Successfully', 'Success');
      this.router.navigateByUrl('/citizenpanel/list');

    },
    (error) => {
      this.snackBarMessage('Observation can\'t be updated', 'Failed');
    })

  };

  snackBarMessage(message, action) {
    this.snackBar.open(message, action, {
      duration: 5500
    });
  }

}
