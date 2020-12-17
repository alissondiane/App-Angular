import { Component, OnInit } from '@angular/core';

//STEP 2 - Defining the dataset for the angular gauge along with the color configuration


@Component({
  selector: 'app-fusion-gauge',
  templateUrl: './fusion-gauge.component.html',
  styleUrls: ['./fusion-gauge.component.css']
})
export class FusionGaugeComponent{
  
  private colorRange = {
    "color": [{
      "minValue": "0",
      "maxValue": "50",
      "code": "#62B58F"
    }, {
      "minValue": "50",
      "maxValue": "75",
      "code": "#FFE900"
    }, {
      "minValue": "75",
      "maxValue": "100",
      "code": "#D43838"
    }]
  };
  
  private dials = {
    "dial": [{
      "value": "67"
    }]
  };

  dataSource: Object;

  constructor() {
    this.dataSource = {
      "chart": {
        "caption": "Customer Satisfaction Score",
        "subcaption": "Last week",
        "lowerLimit": "0",
        "upperLimit": "100",
        "theme": "fusion"
      },
      "colorRange": this.colorRange,
      "dials": this.dials

    };

  }

}







