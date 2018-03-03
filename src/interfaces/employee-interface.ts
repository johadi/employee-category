import { EmployeeInfoInterface } from './employee-info-interface';

export interface EmployeeInterface {
    name: string;
    staffId: string;
    basicSalary: number;

    calculateNetSalary(): number;

    getEmployeeInfo(hasBasicSalary?: boolean): EmployeeInfoInterface;
}