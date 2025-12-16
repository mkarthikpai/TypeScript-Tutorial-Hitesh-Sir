function makeChai(type: string, cups: number) {
  console.log(`MAking ${cups} of ${type}`);
}
makeChai("Masala", 2);

function getChaiPrice(): number {
  return 10;
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

function logChai(): void {
  console.log("Chai is ready");
}

// Optional Parameter
// function orderChai(type?: string) {}
// function orderChai(type: string = "Masala") {}

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 5;
}
