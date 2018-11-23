import { Component, OnInit, ViewChild } from '@angular/core';
import { Observation } from 'src/app/models/observation.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RecordService } from 'src/app/services/record.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-records',
  templateUrl: './add-records.component.html',
  styleUrls: ['./add-records.component.css']
})


export class AddRecordsComponent implements OnInit {

  observation: Observation;
  data: any;
  fields: any;
  // record: Record;

  @ViewChild('createRecordsForm') createRecordsForm: NgForm;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private recordService: RecordService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.observation = new Observation();
    this.observation = this.route.snapshot.data.data.observations[0]
    // this.record = new Record();

    console.log(this.observation);
  }

  onSubmitRecords(val) {
    // console.log(val);
    // this.record['observationId'] = this.observation.observationId;
    // this.record['data'] = val;
    let record = {
      'observationId': this.observation.observationId,
      'data': val
    }
    console.log(record);
    this.recordService.addRecord(record)
      .subscribe(res => {
        this.snackBarMessage("Record Added Successfully", "Success");
        this.router.navigateByUrl(`citizenpanel/listrecords/${this.observation.observationId}`);

      },
        (error => {
          this.snackBarMessage("Failed to add record", "Failed");
        })
      );

  }

  cancelRecord() {
    this.createRecordsForm.resetForm();
    this.router.navigateByUrl(`citizenpanel/listrecords/${this.observation.observationId}`);
  }

  snackBarMessage(message, action) {
    this.snackBar.open(message, action, {
      duration: 5500
    });
  }
}
