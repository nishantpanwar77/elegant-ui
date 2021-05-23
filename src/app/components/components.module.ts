import { SelectDirective } from './../directives/select.directive';
import { RippleButtonDirective } from './../directives/ripple-button.directive';
import { D3BarChartDirective } from './../directives/d3-bar-chart.directive';
import { AuiButtonDirective } from './../directives/aui-button.directive';
import { SharedModule } from './../shared/shared.module';
import { TablesComponent } from './tables/tables.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { IconsComponent } from './icons/icons.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ButtonsComponent,
    ChartsComponent,
    DashboardComponent,
    TablesComponent,
    AuiButtonDirective,
    D3BarChartDirective,
    IconsComponent,
    RippleButtonDirective,
    FormsComponent,
    SelectDirective,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule,
    ClipboardModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
