import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  age: number = new Date().getFullYear() - 1995;
  constructor() { }

  ngOnInit() {

  }

}
