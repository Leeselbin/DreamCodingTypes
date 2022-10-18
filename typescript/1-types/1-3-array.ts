{
  // Array
  const fruits: string[] = ["tomato", "banana"];
  const scores: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {}

  // Tuple (서로다른 타입의 배열을 다가질수 있는 배열)
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
}
