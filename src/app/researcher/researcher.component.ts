import { Component, OnInit ,Input} from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-researcher',
  templateUrl: './researcher.component.html',
  styleUrls: ['./researcher.component.scss'],
})
export class ResearcherComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
  @Input() isVisible: boolean = true;
  visibility = 'shown';

  sideNavOpened: boolean = true;
  matDrawerOpened: boolean = false;
  matDrawerShow: boolean = true;
  sideNavMode: string = 'side';


  ngOnChanges() {
    this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

  constructor(private media: ObservableMedia) { }

  ngOnInit() {
    this.media.subscribe((mediaChange: MediaChange) => {
      this.toggleView();
    });
  }

  ngAfterViewInit(): void {
    this.sideNavOpened = true;
  // matDrawerOpened: boolean = false;
  // matDrawerShow: boolean = true;
  // sideNavMode: string = 'side';
    
  }
  getRouteAnimation(outlet) {

    return outlet.activatedRouteData.animation;
    //return outlet.isActivated ? outlet.activatedRoute : ''
  }

  toggleView() {
    if (this.media.isActive('gt-md')) {
      this.sideNavMode = 'side';
      this.sideNavOpened = true;
      this.matDrawerOpened = false;
      this.matDrawerShow = true;
    } else if (this.media.isActive('gt-xs')) {
      this.sideNavMode = 'side';
      this.sideNavOpened = false;
      this.matDrawerOpened = true;
      this.matDrawerShow = true;
    } else if (this.media.isActive('lt-sm')) {
      this.sideNavMode = 'over';
      this.sideNavOpened = false;
      this.matDrawerOpened = false;
      this.matDrawerShow = false;
    }
  }
}
