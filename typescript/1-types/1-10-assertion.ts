{
  /**
   * Type Assertions 💩(권장되지 않지만 불가피하게 써야되는 경우가 있다)
   */
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  // 이렇게 오류안뜨고 실행시에 터져버릴수 있음
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 확신할수 있을때 '!' 쓴다

  const button = document.querySelector("class")!;
}
