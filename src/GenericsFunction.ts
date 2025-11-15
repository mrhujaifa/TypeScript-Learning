//?=========> Generics with Function <==========

//* Normal function code
const createArrayString = (value: string) => {
  return value;
};
const createArrayNumber = (value: number) => {
  return value;
};
const createArrayUserObj = (value: { id: number; name: string }) => {
  return [value];
};

const arrString = createArrayString("hello word");
const arrNumber = createArrayNumber(33);
const arrObj = createArrayUserObj({
  id: 3939,
  name: "Hello world",
});

//* example for Genertics function system
const createArrayWithGeneric = <T, K>(value: T, value1: K) => {
  return [value];
};

const req = createArrayWithGeneric<string, number>("4343", 39); // pass Generic type
