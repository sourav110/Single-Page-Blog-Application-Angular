import { Component, OnInit } from '@angular/core';
import { Value } from '../models/value';
import { ValueService } from '../services/value.service';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  values: Value[] = [];

  constructor(private valueService: ValueService) { }

  ngOnInit() {
    this.valueService.getValues().subscribe(data => {
      this.values = data;
    }, error => {
      console.log(error);
    });
  }

}
