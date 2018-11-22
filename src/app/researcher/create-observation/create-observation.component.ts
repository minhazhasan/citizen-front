import { Component, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatSnackBar } from '@angular/material';
import { Tags } from 'src/app/models/tags.model';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observation } from 'src/app/models/observation.model';
import { ObservationService } from 'src/app/services/observation.service';
import { Fields } from 'src/app/models/field.model';

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

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  tags: Tags[] = [];

  observation: Observation;

  constructor(private route: Router, private fb: FormBuilder, public snackBar: MatSnackBar, private observationService: ObservationService) {
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
    this.observation.category = 1;
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
    this.manualSelection = false;
    this.enableForm();
    // this.route.navigateByUrl('/citizenpanel/list');
  }

  addObservationByImport(importForm: NgForm) {

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
  snackBarMessage(message, action) {
    this.snackBar.open(message, action, {
      duration: 5500
    });
  }

}
