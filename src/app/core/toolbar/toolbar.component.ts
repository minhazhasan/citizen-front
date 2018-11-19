import { Component, OnInit, Input } from '@angular/core';
//import { ToolbarHelpers } from './toolbar.helpers';

@Component({
  selector: 'cdk-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
	
  @Input() sidenav;
	@Input() sidebar;
	@Input() drawer;
	@Input() matDrawerShow;
	
	
	searchOpen: boolean = false;
	currentUser: String;
    //toolbarHelpers = ToolbarHelpers;
  	constructor() { }

  	ngOnInit() {
			console.log("Toolbars's user component after initialized");
			let currentUserData = JSON.parse(localStorage.getItem('currentUser'));
			this.currentUser = currentUserData['name'];	
			console.log(this.currentUser);
		}
		
		// ngAfterContentInit(): void {
		// 	//Called after ngOnInit when the component's or directive's content has been initialized.
		// 	//Add 'implements AfterContentInit' to the class.
		// 	console.log("Toolbars's user component after initialized");
		// 	let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		// 	this.currentUserName = currentUser['name'];	
		// }



}
