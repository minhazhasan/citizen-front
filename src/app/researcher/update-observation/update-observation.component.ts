import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observation } from 'src/app/models/observation.model';
import { MatChipInputEvent } from '@angular/material';
import { Tags } from 'src/app/models/tags.model';

@Component({
  selector: 'app-update-observation',
  templateUrl: './update-observation.component.html',
  styleUrls: ['./update-observation.component.css']
})
export class UpdateObservationComponent implements OnInit {

  observationDetails: Observation;
  tags: Tags[] = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.observationDetails = new Observation();
    this.observationDetails = this.route.snapshot.data.data.observations[0];
    console.log(this.observationDetails.tags)
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

}
