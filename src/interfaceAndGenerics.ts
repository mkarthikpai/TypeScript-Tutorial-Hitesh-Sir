interface Chai {
  flavour: string;
  price: number;
  milk?: boolean;
}
const masalaChai: Chai = {
  flavour: "masala",
  price: 20,
};

interface Shop {
  readonly id: number;
  name: string;
}
const s: Shop = {
  id: 1,
  name: "K Caffe",
};
// s.id = 5

interface DiscountCalculator {
  (price: number): number;
}
const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}
const machine: TeaMachine = {
  start() {
    console.log("Start");
  },
  stop() {
    console.log("Stop");
  },
};

// Index Signature
interface ChaiRatings {
  [flavor: string]: number;
}
const ratings: ChaiRatings = {
  masala: 5,
  ginger: 7,
};

interface User {
  name: string;
}
interface User {
  age: number;
}
const u: User = {
  name: "Karthik",
  age: 25,
};

interface A {
  a: string;
}
interface B {
  b: string;
}
interface C extends A, B {}
