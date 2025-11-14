//?=========> Generics <==========

//* string , number, boolean, and other type
type GenericArr = Array<string>; // just change value like string

const friends: GenericArr = ["Rohim", "Korim", "Hujaifa"]; // example

//Normal Code example ts
const arr: string[] = ["x", "y", "z"];
const arr1: number[] = [2, 3, 4, 54];
const arr2: boolean[] = [true, false];

//Generics Code example ts
type Generics<value> = Array<value>;
const GenericArray0: Generics<string> = ["x", "y", "z"]; // example string type
const GenericArray1: Generics<number> = [2, 4, 5, 6]; // example number type
const GenericArray2: Generics<boolean> = [true, false, true]; // example boolean type

//* How to use fixed
type Coordinates<x, y, z> = [x, y, z];
const coordinates1: Coordinates<string, number, boolean> = [
  "hello word",
  37,
  true,
];

//* array of object use Generics
//normal object code

const userList1: Generics<{ name: string; age: number }> = [
  {
    name: "mr x",
    age: 3,
  },
  {
    name: "mr y",
    age: 3,
  },
];

//use type alias clear code system
type User2 = { name: string; age: number };

const userList2: Generics<User2> = [
  {
    name: "mr x",
    age: 3,
  },
  {
    name: "mr y",
    age: 3,
  },
];

//*How to use Generic in function

//normal function for ts
const func = (x: string) => {
  return x;
};
func("33");
