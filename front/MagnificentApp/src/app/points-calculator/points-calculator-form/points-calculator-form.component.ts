import { Component, OnInit } from '@angular/core';
import { PointsCounterDto } from 'src/app/models/points-counter-dto.model';

@Component({
  selector: 'app-points-calculator-form',
  templateUrl: './points-calculator-form.component.html',
  styleUrls: ['./points-calculator-form.component.scss']
})
export class PointsCalculatorFormComponent implements OnInit {
  public pointsCounterDto: PointsCounterDto = new PointsCounterDto();
  
  stateOptions = [{label: 'Tak', value: true}, {label: 'Nie', value: false}];

  constructor() { }

  ngOnInit() {
  }

  public submit(): void {
    debugger;
  }
}
