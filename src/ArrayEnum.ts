const chaiFlavours: string[] = ["Masala", "Adrak"];
const chaiPrice: number[] = [10, 20];

const rating: Array<number> = [4.5, 5.0];

type Chai = {
  name: string;
  price: number;
};
const menu: Chai[] = [
  { name: "Masala", price: 15 },
  { name: "Adrak", price: 10 },
];

const cities: readonly string[] = ["Mangalore", "Bangalore"];
// cities.push("Delhi") Cannot add

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

let ChaiTuple: [string, number];
ChaiTuple = ["Masala", 20];
// ChaiTuple = [10, "Masala"];

let userInfo: [string, number, boolean?];
userInfo = ["Karthik", 100];
userInfo = ["Kushi", 100, true];

const location: readonly [number, number] = [28.66, 32.22];

const chaiItems: [name: string, price: number] = ["Masala", 25];

enum Cupsize {
  SMALL,
  MEDIUM,
  LARGE,
}
const size = Cupsize.LARGE;

// Auto increements itself
enum Status {
  PENDING = 100,
  SERVED, //101
  CANCELLED, //102
}

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}
function makeChai(type: ChaiType) {
  console.log(`Making ${type}`);
}
makeChai(ChaiType.GINGER);
// makeChai("masala")

// Hetergenous Values
enum RandomEnum {
  ID = 1,
  NAME = "Chai",
}

const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}
const s = Sugars?.HIGH;

let t: [string, number] = ["chai", 10];
t.push("extra");
