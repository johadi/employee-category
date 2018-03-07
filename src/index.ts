// You can test the various categories of the employee classes here.

import { Employee, HourlyRatedEmployee, CommissionBasedEmployee } from './classes';

const employee: Employee = new Employee('sff00989', 'Jimoh Hadi', 2000);
const hourlyRatedEmployee: HourlyRatedEmployee = new HourlyRatedEmployee('sff4536377', 'Oluwafemi Akande', 0, 8, 0.6);
const commissionBasedEmployee: CommissionBasedEmployee = new CommissionBasedEmployee('sff9836737', 'Taye Ibori', 3000, 400, 0.2);

//Polymorphic form
const newHourlyRatedEmployee: Employee = new HourlyRatedEmployee('sff4536377', 'Olu Ade', 0, 20, 0.8);

//Use our method overloading here
employee.setEmployeeProperty('name', 'Muhammed Jamiu');

console.log(employee.getEmployeeInfo());
console.log(hourlyRatedEmployee.getEmployeeInfo());
console.log(commissionBasedEmployee.getEmployeeInfo());
console.log(newHourlyRatedEmployee.getEmployeeInfo());