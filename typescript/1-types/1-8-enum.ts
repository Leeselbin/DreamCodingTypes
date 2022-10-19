{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monda,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Satarday,
    Sunday,
  }
  console.log(Days.Satarday);

  let day: Days = Days.Satarday;
  day = Days.Tuesday;
  day = 10;
  console.log(day);

  // 이렇게 유니온 타입으로 대채한다.
  type DaysOfWeek = "Monday" | "TuesDay" | "WednesDay";

  let dayOfWeek: DaysOfWeek = "Monday";
  dayOfWeek = "WednesDay";
}
