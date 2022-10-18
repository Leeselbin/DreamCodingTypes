{
  /*
   * Type Aliases
   */
  type Text = string;
  const name: Text = "ellie";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "bin",
    age: 28,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let binName: Name;
  binName = "name";
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
  const isCat: Boal = true;
}
