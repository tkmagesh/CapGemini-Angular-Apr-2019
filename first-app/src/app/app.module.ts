import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { SalaryCalculatorComponent } from './salaryCalculator/salaryCalculator.component';

import { SalaryCalculatorModel } from './salaryCalculator/salaryCalculatorModel';

@NgModule({
  declarations: [
    AppComponent
    , GreeterComponent
    , SalaryCalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SalaryCalculatorModel
  ],
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }
