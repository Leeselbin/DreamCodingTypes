{
  /**
   * Type Assertions π©(κΆμ₯λμ§ μμ§λ§ λΆκ°νΌνκ² μ¨μΌλλ κ²½μ°κ° μλ€)
   */
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  // μ΄λ κ² μ€λ₯μλ¨κ³  μ€νμμ ν°μ Έλ²λ¦΄μ μμ
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // νμ ν μ μμλ '!' μ΄λ€

  const button = document.querySelector("class")!;
}
