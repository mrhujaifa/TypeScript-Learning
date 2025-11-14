const kgToGmConverter = (
  input: string | number
): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");

    return `Coverted output is : ${Number(value) * 1000}`;
  }
};

//? if i know the sure type of code .. i can use 'as'
//! if i not sure type of code i dont use "as"
const result1 = kgToGmConverter(2) as number;
const result2 = kgToGmConverter("2 kg");

console.log(result1);
console.log(result2);
