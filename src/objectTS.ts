const chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger Tea",
  price: 15,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 25,
  ingredients: ["Ginger", "Tea Leaves"],
};

type Cup = {
  size: string;
};

let smallCup: Cup = { size: "250 ml" };
let bigCup = {
  size: "500 ml",
  material: "Steel",
};
smallCup = bigCup;

type Item = {
  name: string;
  quantity: number;
};
type Address = {
  street: string;
  pin: number;
};
type Order = {
  id: string;
  items: Item[];
  adress: Address;
};

// ---------------
type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<Chai>) => {
  console.log("Updating Chai With", updates);
};

updateChai({ price: 15 });
updateChai({ isHot: false });
updateChai({});
// ---------------

// ******************
type ChaiOrder = {
  name?: string;
  quantity?: number;
};
const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

placeOrder({ name: "MAsalaChai", quantity: 2 });
// ******************

// +++++++++++++++++
type newTea = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicTeaInfo = Pick<newTea, "name" | "price">;

const chaiInfo: BasicTeaInfo = {
  name: "Lemon Tea",
  price: 30,
};
// +++++++++++++++++

type chaiSam = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string;
};

type PublicChai = Omit<chaiSam, "secretIngredients">;
