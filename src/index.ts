// You can test the various categories of the employee classes here.

import { Employee, HourlyRatedEmployee, CommissionBasedEmployee } from './classes';

const employee = new Employee('sff00989', 'Jimoh Hadi', 2000);
const hourlyRatedEmployee = new HourlyRatedEmployee('sff4536377', 'Oluwafemi Akande', 0, 8, 0.6);
const commissionBasedEmployee = new CommissionBasedEmployee('sff9836737', 'Taye Ibori', 3000, 400, 0.2);

console.log(employee.getEmployeeInfo());
console.log(hourlyRatedEmployee.getEmployeeInfo());
console.log(commissionBasedEmployee.getEmployeeInfo());