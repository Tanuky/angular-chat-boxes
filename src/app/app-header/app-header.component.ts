import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})

/*
 * AppHeaderComponent UI component to display the header of the application
 */
export class AppHeaderComponent implements OnInit {

  // inputHeader : String to display on the header
  @Input() inputHeader : String;

  constructor() { }

  ngOnInit() {
  }

}
