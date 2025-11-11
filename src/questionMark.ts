// ? : ternary operator : decision marking
// ?? : nullish coalescing operator null or undifine
// ?. optional chaining

//* Example for ternary operator
const isMarage = (age: number) => {
  // use if condition
  if (age >= 21) {
    console.log("you are eligible");
  } else {
    console.log("you are not eligible to marage");
  }

  // use ternary operator
  const result = age >= 18 ? "you are eligible" : "you are not elgible!";
};
// function call
isMarage(18);

//* Example for nullish calescing operator only for null or undifine
const useTheme = undefined;

const seletedTheme = useTheme ?? "Light Theme";

//Result
console.log(seletedTheme);

//* Example ternary vs nullish calescing operator

const isAuthenticated = null;
const resultWithTernary = isAuthenticated ? isAuthenticated : "you are guest !";

const resultWithNulish = isAuthenticated ?? "you are guest !";

// All result
console.log(resultWithNulish, resultWithTernary);

//* Example for optional chaining

const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "dhaka",
    town: "Banani",
    postalCode: "3434",
  },
};

// used optional chain if data miss no problem for app
const postalCode = user?.address?.city;
