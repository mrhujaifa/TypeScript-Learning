// How to use Function in Typescripts
// araw function , normal function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

// araw function
const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};

addArrow(2, 3);
add(3, 3);

//?Object => function

const poorUser = {
  name: "hujaifa",
  balance: 0,
  addBalance(value: number) {
    const totalBalace = this.balance + value;
    return totalBalace;
  },
};

poorUser.addBalance(10000);

const arr: number[] = [1, 2, 3, 4];

const sqr = arr.map((ele: number) => {
  ele % ele;
});
