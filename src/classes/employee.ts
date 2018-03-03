/*
* This is the base class for all employees of any type.
* employee of this kind only receives basic salary. no other payment
* */
import { EmployeeInterface } from '../interfaces/employee-interface';
import { EmployeeInfoInterface } from '../interfaces/employee-info-interface';

export class Employee implements EmployeeInterface {
    staffId: string;
    name: string;
    basicSalary: number;

    constructor(staffId: string, name: string, basicSalary: number) {
        this.staffId = staffId;
        this.name = name;
        this.basicSalary = basicSalary;
    }

    //getter methods
    getStaffId() {
        return this.staffId;
    }

    getName() {
        return this.name;
    }

    getBasicSalary(): number {
        return this.basicSalary;
    }

    //setter methods
    setStaffId(staffId: string) {
        this.staffId = staffId;
    }

    setName(name: string) {
        this.name = name;
    }

    setBasicSalary(basicSalary: number) {
        this.basicSalary = basicSalary;
    }

    //net salary of an ordinary employee should just be his basic salary
    calculateNetSalary(): number {
        return this.getBasicSalary();
    }

    getEmployeeInfo(hasBasicSalary = true): EmployeeInfoInterface {
        const employeeInfo: EmployeeInfoInterface = {
            staffId: this.staffId,
            name: this.name,
        };

        if (hasBasicSalary) {
            employeeInfo.basicSalary = this.basicSalary;
        }

        return employeeInfo;
    }

}
