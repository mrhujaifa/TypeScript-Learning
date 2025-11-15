//* keyof example code ts

//* Example index: 0
// Alias type
type RichPeopleVericle = {
  car: string;
  bike: string;
  cng: string;
};
// normal code
type MyVehicle1 = "Bike" | "car" | "cng";

// use keyOf code
type MyVehicle2 = keyof RichPeopleVericle;

//for example
const myVehicle: MyVehicle1 = "cng"; // normal code example
const myVehicle1: MyVehicle2 = "cng"; // keyOf code example

//* Example index: 1

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};
const user: User = {
  id: 222,
  name: "Hujaifa",
  address: {
    city: "ksh",
  },
};

const getPropertyFromObj = (obj: User, key: keyof User) => {
  return obj[key];
};

getPropertyFromObj(user, "id");



