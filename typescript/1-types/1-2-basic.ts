{
  //   // JavaScript
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }

  //   // TypeScript
  //   function add(num1: number, num2: number): number {
  //     return num1 + num2;
  //   }

  //   // JavaScript
  //   function jsFetchNum(id) {
  //     // code...
  //     // code...
  //     // code...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //   // TypeScript
  //   function FetchNum(id: string): Promise<number> {
  //     // code...
  //     // code...
  //     // code...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  // JavaScript => TypeScript
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName("Steve", "Jobs");
  printName("Bin");
  printName("Anna", undefined);

  // Default parameter
  function prnitMessage(message: string = "default message") {
    console.log("----------------");
    console.log(message);
  }
  prnitMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4, 5));
}
