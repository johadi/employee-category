import { assert } from 'chai';
import { CommissionBasedEmployee } from '../src/classes';

describe('Hourly Rated Employee test cases', () => {
    describe('check object is instance or not instance of CommissionBasedEmployee class', () => {
        it('should return true if hourEmployee is instance of CommissionBasedEmployee', () => {
            let commissionBasedEmployee = new CommissionBasedEmployee('u11csx109', 'jimoh', 3000, 23, 100);
            assert.instanceOf(commissionBasedEmployee, CommissionBasedEmployee);
        });
        it('should return true if employee2 not an instance of CommissionBasedEmployee', () => {
            let employee2 = new Object({
                name: 'jimoh',
                staffId: 'u83738dhd',
                basicSalary: 5000,
                salesVolumes: 250,
                commissionRate: 250
            });
            assert.notInstanceOf(employee2, CommissionBasedEmployee);
        });
    });

    describe('handles valid results with getter methods and net salary', () => {
        it('should return 3000 as net salary', () => {
            let employee = new CommissionBasedEmployee('u11csx109', 'jimoh', 2000, 450, 1.5);
            assert.equal(employee.calculateNetSalary(), 2675);
        });
        it('should return jimoh dayo as employee name', () => {
            let employee = new CommissionBasedEmployee('u11csx109', 'jimoh dayo', 4000, 450, 1.5);
            assert.equal(employee.getName(), 'jimoh dayo');
        });
        it('should return u11csx1011 as the staff ID', () => {
            let employee = new CommissionBasedEmployee('u11csx1011', 'jimoh', 4000, 450, 1.5);
            assert.equal(employee.getStaffId(), 'u11csx1011');
        });
        it('should return 450 as employee sales volumes', () => {
            let employee = new CommissionBasedEmployee('u11csx109', 'jimoh oliver', 4000, 450, 1.5);
            assert.equal(employee.getSalesVolumes(), 450);
        });
        it('should return 1.5 as the employee commission rate', () => {
            let employee = new CommissionBasedEmployee('u11csx1011', 'jimoh', 4000, 450, 1.5);
            assert.equal(employee.getCommissionRate(), 1.5);
        });
        it('should return 4000 as basic salary', () => {
            let employee = new CommissionBasedEmployee('u11csx109', 'jimoh', 4000, 450, 1.5);
            assert.equal(employee.getBasicSalary(), 4000);
        });

    });
    describe('handles valid results with setter methods and net salary', () => {

        it('should return Sanches Jimoh as employee name after mutating it with setName setter method', () => {
            let employee = new CommissionBasedEmployee('u11csx109', 'jimoh hadi', 4000, 450, 1.5);
            employee.setName('Sanches Jimoh');
            assert.equal(employee.getName(), 'Sanches Jimoh');
        });
        it('should return u21gh6758 as the staff ID after mutating it with setStaffId setter method', () => {
            let employee = new CommissionBasedEmployee('u11csx109', 'jimoh', 4000, 450, 1.5);
            employee.setStaffId('u21gh6758');
            assert.equal(employee.getStaffId(), 'u21gh6758');
        });
        it('should return 300 as employee sales volumes after mutating it with setSalesVolumes setter method', () => {
            let employee = new CommissionBasedEmployee('u11csx109', 'jimoh hadi', 4000, 450, 1.5);
            employee.setSalesVolumes(300);
            assert.equal(employee.getSalesVolumes(), 300);
        });
        it('should return 2.1 as the commission rate after mutating it with setCommissionRate setter method', () => {
            let employee = new CommissionBasedEmployee('u11csx109', 'jimoh', 4000, 450, 1.5);
            employee.setCommissionRate(2.1);
            assert.equal(employee.getCommissionRate(), 2.1);
        });
        it('should return 3630 as net salary after mutating it with setSalesVolumes and setCommissionRate setter methods', () => {
            let employee = new CommissionBasedEmployee('u11csx109', 'jimoh', 3000, 450, 1.5);
            employee.setCommissionRate(2.1);
            employee.setSalesVolumes(300);
            assert.equal(employee.calculateNetSalary(), 3630);
        });
    });
});