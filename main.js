function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Employee(name, age, position, salary) {
    this.position = position;
    let _salary = salary;

    this.getSalary = function () {
        return _salary;
    }

    this.setSalary = function (amount) {
        if (typeof amount === 'number') {
            _salary = amount;
        }
    }

    this.payRise = function () {
        const newSalary = this.getSalary() * 1.1;
        _salary = newSalary;
    }

    Person.call(this, name, age);
}

function Intern(name, age) {
    Employee.call(this, name, age, "Intern", 2000);

    this.payRise = function () {
        const newSalary = this.getSalary() * 1.07;
    }
}

function Manager(name, age) {
    Employee.call(this, name, age, "Manager", 10000);

    this.payRise = function () {
        const newSalary = this.getSalary() * 1.15;
    }
}


const employee1 = new Employee("Lucas", 23, "Dev Front-end", 5000);
const employee2 = new Intern("Eduardo", 20);
const employee3 = new Manager("Vanessa", 26);

console.log(employee1)
console.log(employee2)
console.log(employee3)

employee1.payRise();
console.log(employee1.getSalary());

employee2.payRise();
console.log(employee2.getSalary());

employee3.payRise();
console.log(employee3.getSalary());
