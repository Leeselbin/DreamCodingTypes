interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log("full time!!");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 똥이다.
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const bin = new FullTimeEmployee();
const tom = new PartTimeEmployee();
bin.workFullTime();
tom.workPartTime();

const binAfterPay = pay(bin);
const tomAfterPay = pay(tom);

const obj = {
  name: "bin",
  age: 20,
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
console.log(getValue(obj, "name")); // bin
console.log(getValue(obj, "age")); // 20
