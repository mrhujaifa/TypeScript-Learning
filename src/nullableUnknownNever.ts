//* Nullable example
const getUser = (input: string | null) => {
  if (input) {
    console.log("from db");
  } else {
    console.log("From db: all user");
  }
};
getUser(null);

//* Example Unknown

const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountPrice = input * 0.1;
    console.log(discountPrice);
  } else if (typeof input === "string") {
    const [discountPrice] = input.split(" ");
    console.log(discountPrice);

    const convertNum = Number(discountCalculator);
    const result = convertNum * 0.1;

    console.log(result);
  } else {
    console.log("Error input");
  }
};

// input
discountCalculator(20);
discountCalculator("100 tk");
discountCalculator(null);

// Example Never or void

const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("Error......!");
