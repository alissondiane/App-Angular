import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fusion-line',
  templateUrl: './fusion-line.component.html',
  styleUrls: ['./fusion-line.component.css']
})
export class FusionLineComponent implements OnInit {
  dataSource: Object;
  constructor() { 
  // STEP 2- Define the categories representing the labels on the X-axis
const categories = [{
  "category": [{"label": "10/11/2019"},{"label": "11/11/2019"},{"label": "12/11/2019"},{"label": "12/11/2019"}, {"label": "12/11/2019"},
  {"label": "12/11/2019"},{"label": "12/11/2019"},{"label": "12/11/2019"},{"label": "12/11/2019"},{"label": "12/11/2019"},{"label": "12/11/2019"
  },{"label": "12/11/2019"}]}]
  // STEP 3- Construct the dataset comprising combination series
  const dataset = [
    /*
    {"seriesName": "Actual Revenue",
    "showValues": "1",
    "data": [{"value": "16000"},{"value": "20000"}, {"value": "18000"},{"value": "19000"},{"value": "15000"},
            {"value": "21000"},{"value": "16000"},{"value": "20000"},{"value": "17000"},{"value": "25000"},
            {"value": "19000"},{"value": "23000"}]},
    
    {"seriesName": "Projected Revenue",
    "renderAs": "line",
    "data": [{"value": "15000"},{"value": "16000"},{"value": "17000"},{"value": "18000"},{"value": "19000"},
            {"value": "19000"},{"value": "19000"},{"value": "19000"},{"value": "20000"},{"value": "21000"},
            {"value": "22000"},{"value": "23000"}]},*/
    {"seriesName": "Temperatura",
    "renderAs": "area",
    "data": [{"value": "21"},{"value": "22"},{"value": "23"},{"value": "21"},{"value": "20"},
            {"value": "20"},{"value": "30"},{"value": "29"},{"value": "28"},{"value": "23"},
            {"value": "19"},{"value": "21"}]}]
  this.dataSource = {
    "chart": {
    "caption": "Histórico Cultivo",
    "subCaption": "TEMPERATURA",
    "xAxisname": "Días",
    "yAxisName": "Temperatura",
    "numberSuffix":"C°",
    /*"numberPrefix": "\$",*/
    "divlineColor": "#999999",
    "divLineIsDashed": "1",
    "divLineDashLen": "1",
    "divLineGapLen": "1",
    "toolTipColor": "#ffffff",
    "toolTipBorderThickness": "0",
    "toolTipBgColor": "#000000",
    "toolTipBgAlpha": "80",
    "toolTipBorderRadius": "2",
    "toolTipPadding": "5",
    "theme": "fusion"
    },
    "categories": categories,
    "dataset": dataset
    }; // end of this.dataSource
  }

  ngOnInit(): void {
  }

}
