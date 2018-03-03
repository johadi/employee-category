/*
 * This is a category of Employee that earns more to his basic salary.
 *  employee of this kind receives basic salary and extra commission from the sales volumes he/she made before the salary payment
 * */
import { Employee } from './employee';

export class CommissionBasedEmployee extends Employee {
    private salesVolumes: number;
    private commissionRate: number;

    constructor(staffId: string, name: string, basicSalary: number, salesVolumes: number, commissionRate: number) {
        super(staffId, name, basicSalary);
        this.salesVolumes = salesVolumes;
        this.commissionRate = commissionRate;
    }

    //getter methods
    getSalesVolumes() {
        return this.salesVolumes;
    }

    getCommissionRate() {
        return this.commissionRate;
    }

    //setter methods
    setSalesVolumes(salesVolumes: number) {
        this.salesVolumes = salesVolumes;
    }

    setCommissionRate(commissionRate: number) {
        this.commissionRate = commissionRate;
    }

    //net salary involving employee basic salary and commission
    calculateNetSalary() {
        return super.calculateNetSalary() + this.getSalesVolumes() * this.getCommissionRate();
    }

}
