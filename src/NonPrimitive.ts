//Non Primitive Data type in ts

// index: 01
// scring Type array
const bazarList: string[] = ["eggs", "oil", "milk"];

//! Error =>  bazarList.push(true);

//index: 02
//* String and number Type arr
//? I can push just string or number in the arr value
const mixedArr: (string | number)[] = ["eggs", 4, "hello world", 6];

//!Error => mixedArr.push(true);

//index: 03
// How to fixed any type of arr value
const examResult: [number, number] = [20, 40];

//! Error => you cannot push other one any arr becouse this arr define const value like [number, number]

//index: 04
// How to fixed any type of arr value
const hujaifaNameOrRoll: [string, number] = ["Hujaifa", 39];

//! Error => hujaifaNameOrRoll[0] = 99

//?>>>>>>>>>>>> Object of Typescript<<<<<<<<<<<<<<<?//
//index: 05
// How to use type script in object

const user: {
  FirstName: "Mr Hujaifa"; // permanent type set
  readonly MiddleName: "Mr Hujaifa"; // access modifyer
  LastName?: string; // optional type
} = {
  FirstName: "Mr Hujaifa",
  MiddleName: "Mr Hujaifa",
  LastName: "islam",
};
