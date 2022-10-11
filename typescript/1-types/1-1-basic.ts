{
  /**
   * JavaScirpt
   * Primitive(원시타입 - 1가지타입만 가지는)
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array....
   */

  //number
  const num: number = 1;

  //string
  const str: string = "hello";

  //boolean
  const boal: boolean = true;

  //undefined
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  //null
  let person: string | null;
  person = null;
  person = "test";

  // unknown 안쓰는거 권장
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 안쓰는거 권장
  let anything: any = 0;
  anything = "hello";

  // void - 아무것도 리턴하지 않는경우 생략가능
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 절대 x

  // never - return 을 던질수없다.
  function throwError(message: string): never {
    //message -> server (log)
    throw new Error(message);
  }

  // object - 쓰지 않는것이 좋다
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
