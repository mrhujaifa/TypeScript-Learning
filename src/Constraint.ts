//* Constraint example

// Constraint Default Const Data | like e conditional const data
type StudentContData = {
  id: number;
  name: string;
  age: number;
};

// Constraint example
const addStudentToCourse = <T extends StudentContData>(studentInfo: T) => {
  return {
    course: "TS Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 333,
  name: "Mr x",
  age: 22,
  hasPen: true,
};

// all data here
const student2 = {
  id: 333,
  age: 22,
  name: "Mr y",
  hasPen: true,
};

//! No const data here
const student3 = {
  hasWatch: true,
};

// const res0 = addStudentToCourse(student3); //! student3 obj No const data here give us error
const res1 = addStudentToCourse(student1); // all data here this studnet1 veriable

console.log(res1);
