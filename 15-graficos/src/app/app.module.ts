import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*GRAFICOS*/
import { ChartsModule } from 'ng2-charts';
/*COMPONENTES GRAFICOS*/
import { LineComponent } from './components/line/line.component';
import { BarComponent } from './components/bar/bar.component';
import { DoughnutComponent } from './components/doughnut/doughnut.component';
import { RadarComponent } from './components/radar/radar.component';

/*FUSION CHARTS */
//https://www.fusioncharts.com/dev/getting-started/angular/angular/your-first-chart-using-angular
import { FusionChartsModule } from "angular-fusioncharts";

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import * as Widgets from 'fusioncharts/fusioncharts.widgets';

import { FusionBarComponent } from './components/fusion-bar/fusion-bar.component';
import { FusionGaugeComponent } from './components/fusion-gauge/fusion-gauge.component';
import { FusionLineComponent } from './components/fusion-line/fusion-line.component';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts,Widgets, FusionTheme);



@NgModule({
  declarations: [
    AppComponent,
    LineComponent,
    BarComponent,
    DoughnutComponent,
    RadarComponent,
    FusionBarComponent,
    FusionGaugeComponent,
    FusionLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
