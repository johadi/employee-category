import { assert } from 'chai';
import { Employee } from '../src/classes';

describe('Ordinary Employee test cases', () => {
    describe('check object as instance or not instance of Employee class only', () => {
        it('should return true if employee1 is instance of Employee', () => {
            let employee1 = new Employee('u11csx109', 'jimoh', 3000);
            assert.instanceOf(employee1, Employee);
        });
        it('should return true if employee2 not an instance of Employee', () => {
            let employee2 = new Object({
                name: 'jimoh',
                staffId: 'u83738dhd',
                basicSalary: 5000
            });
            assert.notInstanceOf(employee2, Employee);
        });
    });

    describe('handles valid results with getter methods and net salary', () => {
        it('should return 3000 as net salary', () => {
            let employee = new Employee('u11csx109', 'jimoh', 3000);
            assert.equal(employee.calculateNetSalary(), 3000);
        });
        it('should return jimoh hadi as employee name', () => {
            let employee = new Employee('u11csx109', 'jimoh hadi', 3000);
            assert.equal(employee.getName(), 'jimoh hadi');
        });
        it('should return u11csx109 as the staff ID', () => {
            let employee = new Employee('u11csx109', 'jimoh hadi', 3000);
            assert.equal(employee.getStaffId(), 'u11csx109');
        });
        it('should return 3000 as basic salary', () => {
            let employee = new Employee('u11csx109', 'jimoh', 3000);
            assert.equal(employee.getBasicSalary(), 3000);
        });

    });
    describe('handles valid results with setter methods and net salary', () => {
        it('should return 5000 as net salary after mutating it with setBasicSalary setter method', () => {
            let employee = new Employee('u11csx109', 'jimoh', 3000);
            employee.setBasicSalary(5000);
            assert.equal(employee.calculateNetSalary(), 5000);
        });
        it('should return Omawumi Kayode as employee name after mutating it with setName setter method', () => {
            let employee = new Employee('u11csx109', 'jimoh hadi', 3000);
            employee.setName('Omawumi Kayode');
            assert.equal(employee.getName(), 'Omawumi Kayode');
        });
        it('should return u08xcl112 as the staff ID after mutating it with setter method', () => {
            let employee = new Employee('u11csx109', 'jimoh hadi', 3000);
            employee.setStaffId('u08xcl112');
            assert.equal(employee.getStaffId(), 'u08xcl112');
        });
    });

});
