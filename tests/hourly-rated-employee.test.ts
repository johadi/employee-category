import { assert } from 'chai';
import { HourlyRatedEmployee } from '../src/classes';

describe('Hourly Rated Employee test cases', () => {
    describe('check object is instance or not instance of HourlyRatedEmployee class', () => {
        it('should return true if hourEmployee is instance of HourlyRatedEmployee', () => {
            let hourEmployee = new HourlyRatedEmployee('u11csx109', 'jimoh', 3000, 23, 100);
            assert.instanceOf(hourEmployee, HourlyRatedEmployee);
        });
        it('should return true if employee2 not an instance of HourlyRatedEmployee', () => {
            let employee2 = new Object({
                name: 'jimoh',
                staffId: 'u83738dhd',
                basicSalary: 5000,
                hoursWorked: 25,
                hourlyRate: 250
            });
            assert.notInstanceOf(employee2, HourlyRatedEmployee);
        });
    });

    describe('handles valid results with getter methods and net salary', () => {
        it('should return 3000 as net salary', () => {
            let employee = new HourlyRatedEmployee('u11csx109', 'jimoh', 4000, 45, 300);
            assert.equal(employee.calculateNetSalary(), 13500);
        });
        it('should return jimoh oliver as employee name', () => {
            let employee = new HourlyRatedEmployee('u11csx109', 'jimoh oliver', 4000, 45, 300);
            assert.equal(employee.getName(), 'jimoh oliver');
        });
        it('should return u11csx1011 as the staff ID', () => {
            let employee = new HourlyRatedEmployee('u11csx1011', 'jimoh', 4000, 45, 300);
            assert.equal(employee.getStaffId(), 'u11csx1011');
        });
        it('should return 45 as employee hours worked', () => {
            let employee = new HourlyRatedEmployee('u11csx109', 'jimoh oliver', 4000, 45, 300);
            assert.equal(employee.getHoursWorked(), 45);
        });
        it('should return 300 as the employee hourly rate', () => {
            let employee = new HourlyRatedEmployee('u11csx1011', 'jimoh', 4000, 45, 300);
            assert.equal(employee.getHourlyRate(), 300);
        });
        it('should return 0 as basic salary since his salary is based on hours worked and hourly rate', () => {
            let employee = new HourlyRatedEmployee('u11csx109', 'jimoh', 4000, 45, 300);
            assert.equal(employee.getBasicSalary(), 0);
        });

    });
    describe('handles valid results with setter methods and net salary', () => {

        it('should return Sanches Hadi as employee name after mutating it with setName setter method', () => {
            let employee = new HourlyRatedEmployee('u11csx109', 'jimoh hadi', 4000, 45, 300);
            employee.setName('Sanches Hadi');
            assert.equal(employee.getName(), 'Sanches Hadi');
        });
        it('should return u21gh6758 as the staff ID after mutating it with setStaffId setter method', () => {
            let employee = new HourlyRatedEmployee('u11csx109', 'jimoh', 4000, 45, 300);
            employee.setStaffId('u21gh6758');
            assert.equal(employee.getStaffId(), 'u21gh6758');
        });
        it('should return 50 as employee hours worked after mutating it with setHourWorked setter method', () => {
            let employee = new HourlyRatedEmployee('u11csx109', 'jimoh hadi', 4000, 45, 300);
            employee.setHoursWorked(50);
            assert.equal(employee.getHoursWorked(), 50);
        });
        it('should return 500 as the hourly rate after mutating it with setHourlyRate setter method', () => {
            let employee = new HourlyRatedEmployee('u11csx109', 'jimoh', 4000, 45, 300);
            employee.setHourlyRate(500);
            assert.equal(employee.getHourlyRate(), 500);
        });
        it('should return 25000 as net salary after mutating it with setHourlyRate and setHoursWorked setter methods', () => {
            let employee = new HourlyRatedEmployee('u11csx109', 'jimoh', 4000, 45, 300);
            employee.setHourlyRate(500);
            employee.setHoursWorked(50);
            assert.equal(employee.calculateNetSalary(), 25000);
        });
    });

});