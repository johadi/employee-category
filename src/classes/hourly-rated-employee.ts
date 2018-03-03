/*
 * This is the category of employees that receives no basic salary.
 * such employee is only paid based on the hours he worked and the hourly rate assign to the job. no basic salary
 * */
import { Employee } from './employee';

export class HourlyRatedEmployee extends Employee {
    private hoursWorked: number;
    private hourlyRate: number;

    constructor(staffId: string, name: string, basicSalary: number, hoursWorked: number, hourlyRate: number) {
        super(staffId, name, 0);
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
    }

    //getter methods
    getHoursWorked() {
        return this.hoursWorked;
    }

    getHourlyRate() {
        return this.hourlyRate;
    }

    //setter methods
    setHoursWorked(hoursWorked: number) {
        this.hoursWorked = hoursWorked;
    }

    setHourlyRate(hourlyRate: number) {
        this.hourlyRate = hourlyRate;
    }

    //hourly reated employee net salary should be the hour worked times his hourly rate. no basic salary
    calculateNetSalary() {
        return this.getHourlyRate() * this.getHoursWorked();
    }

    // This category of employee has no basic salary so we override it in the super class accordingly
    getEmployeeInfo() {
        return super.getEmployeeInfo(false);
    }
}

