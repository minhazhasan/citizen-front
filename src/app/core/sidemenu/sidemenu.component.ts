import { Component, OnInit, Input } from '@angular/core';
import { menus } from './menu-element';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


@Component({
  selector: 'cdk-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

    @Input() iconOnly:boolean = false;
    public config: PerfectScrollbarConfigInterface = {};
    public menus = menus;

    constructor() { }

    ngOnInit() {
    }

}
