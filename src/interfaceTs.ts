type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

// function makeChai(order: { type: string; sugar: number; strong: boolean }) {
//   console.log(order);
// }
function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

type TeaReceipe = {
  water: number;
  milk: number;
};

class MasalaChai implements TeaReceipe {
  water = 100;
  milk = 50;
}

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

type TeaType = "masala" | "ginger" | "lemon";
function orderChai(t: TeaType) {
  console.log(t);
}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type MasChai = BaseChai & Extra;
const cup: MasChai = {
  teaLeaves: 2,
  masala: 1,
};

type user = {
  username: string;
  bio?: string;
};

const ul: user = { username: "karthik" };
const u2: user = { username: "karthik", bio: "kp.cpm" };

type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: "MAsterji",
  version: 1,
};

// cfg.appName = "New"
