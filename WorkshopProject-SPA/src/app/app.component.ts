import { ValueService } from './services/value.service';
import { Component, OnInit } from '@angular/core';
import { Value } from './models/value';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'WorkshopProject-SPA';
  //values: Value[] = [];

  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    // this.valueService.getValues().subscribe(data => {
    //   this.values = data;
    // }, error => {
    //   console.log(error);
    // });
  }
}
