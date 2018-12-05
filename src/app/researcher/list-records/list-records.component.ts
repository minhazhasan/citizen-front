import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Observation } from 'src/app/models/observation.model';
import { Fields } from 'src/app/models/field.model';
import { RecordDataSource } from 'src/app/services/record.datasource';
import { MatSort, MatPaginator } from '@angular/material';
import { RecordService } from 'src/app/services/record.service';
import { merge, fromEvent } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

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
  dataSource: RecordDataSource;
  tableHeight =  '';
  fieldsTypeValue = new Map([
    ['File', 1],
    ['Number', 2],
    ['Text', 3]
  ]);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('searchInput') searchInput: ElementRef;

  displayedColumns = ['field', 'value', 'actions'];
  fieldsVal = [];


  constructor(private route: ActivatedRoute, private router: Router,
    private recordService: RecordService) {

  };

  ngOnInit() {
    this.observationDetails = new Observation();
    this.observationDetails = this.route.snapshot.data.data.observations[0];

    for(let val of this.observationDetails.fields){
      let data = {};
      if(val['type'] == 1){
        data = {'fieldTitle': val['title'], 'fieldType': 'File'}
      }
      else if(val['type'] == 2){
        data = {'fieldTitle': val['title'], 'fieldType': 'Number'}
      }
      else{
        data = {'fieldTitle': val['title'], 'fieldType': 'Text'}
      }

      this.fieldsVal.push(data)
    };

    console.log(this.fieldsVal);

    this.dataSource = new RecordDataSource(this.recordService);
    this.dataSource.loadRecords(this.observationDetails.observationId, 0, 10, '')

    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    if(this.dataSource.hasItems){
      this.tableHeight = '550px';
    }

    // console.log(this.observationDetails);

    /* Data load will be triggered in two cases:
- when a pagination event occurs => this.paginator.page
- when a sort event occurs => this.sort.sortChange
**/
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => { this.loadRecordsList(); })
      )
      .subscribe();

    // Filtration, bind to searchInput
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        debounceTime(150), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        distinctUntilChanged(), // This operator will eliminate duplicate values
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadRecordsList();
        })
      )
      .subscribe();

  };

  loadRecordsList() {
    this.dataSource.loadRecords(this.observationDetails.observationId, 
      this.paginator.pageIndex, 
      this.paginator.pageSize, 
      this.searchInput.nativeElement['value']);
  };

  addRecord() {
    this.router.navigateByUrl(`citizenpanel/addrecord/${this.observationDetails.observationId}`);
  };

  updateObservation(){
    this.router.navigateByUrl(`citizenpanel/updateobservation/${this.observationDetails.observationId}`);
  }

}
