import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ObservationService } from 'src/app/services/observation.service';
import { Observation } from 'src/app/models/observation.model';
import { MatPaginator, MatSort } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { merge, fromEvent } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ObservationDataSource } from 'src/app/services/observation.datasource';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  observation: Observation[];

  dataSource: ObservationDataSource;
  accountId: string;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('searchInput') searchInput: ElementRef;

  // Columns which should view in table
  displayedColumns = ['title', 'description', 'category', 'fields', 'date', 'tags', 'actions'];

  constructor(private observationService: ObservationService, 
    private route: ActivatedRoute,
    private router: Router) {

  }




  ngOnInit() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.accountId = currentUser['accountId'];

    this.dataSource = new ObservationDataSource(this.observationService);
    this.dataSource.loadObservations('', this.accountId, 0, 10, 'asc');

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    /* Data load will be triggered in two cases:
    - when a pagination event occurs => this.paginator.page
    - when a sort event occurs => this.sort.sortChange
    **/
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => { this.loadObservationList(); })
      )
      .subscribe();

    // Filtration, bind to searchInput
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        debounceTime(150), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        distinctUntilChanged(), // This operator will eliminate duplicate values
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadObservationList();
        })
      )
      .subscribe();

  }

  loadObservationList() {
    this.dataSource.loadObservations(this.searchInput.nativeElement['value'],
      this.accountId,
      this.paginator.pageIndex,
      this.paginator.pageSize,
      this.sort.direction)
  }

  viewRecords(observation){
    // console.log(observation['observationId']);
    this.router.navigateByUrl(`citizenpanel/listrecords/${observation['observationId']}`)
  }

}
