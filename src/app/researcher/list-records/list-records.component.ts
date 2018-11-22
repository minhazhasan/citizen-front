import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Observation } from 'src/app/models/observation.model';
import { Fields } from 'src/app/models/field.model';

@Component({
  selector: 'app-list-records',
  templateUrl: './list-records.component.html',
  styleUrls: ['./list-records.component.scss']
})
export class ListRecordsComponent implements OnInit {

  observationDetails: Observation;
  data: any;
  fields: any;
  checked = false;
  indeterminate = false;

  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.observationDetails = new Observation();
    this.observationDetails = this.route.snapshot.data.data.observations[0]

    console.log(this.observationDetails);
    
  }

  employees = [
    {select: 'Hari', position: 'Full stack developer',image:'assets/profile.jpg'},
    {select: 'Sujith', position: 'Full stack developer',image:'assets/man.jpeg'},
    {select: 'Ramya', position: 'Full stack developer',image:'assets/noavatar.png'},
    {select: 'Sree', position: 'Full stack developer',image:'assets/profile.jpg'},
    {select: 'Sruthy', position: 'Full stack developer',image:'assets/noavatar.png'},
    {select: 'Fahad', position: 'Full stack developer',image:'assets/profile.jpg'},
  ];

}
