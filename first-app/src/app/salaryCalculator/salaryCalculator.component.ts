import { Component } from '@angular/core';
import { SalaryCalculatorModel } from './salaryCalculatorModel';

@Component({
	selector : 'app-salary-calculator',
	templateUrl : 'salaryCalculator.component.html',
	styleUrls : ['salaryCalculator.component.css']
})
export class SalaryCalculatorComponent{
	
	/*model : SalaryCalculatorModel;

	constructor(_model : SalaryCalculatorModel){
		this.model = _model;
	}*/

	constructor( private model : SalaryCalculatorModel){
		
	}

}