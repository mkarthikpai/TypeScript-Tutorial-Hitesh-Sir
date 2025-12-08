// Unions

let subs: number | string = "1m";

let apRequestStatus: "pending" | "success" | "error" = "pending";
apRequestStatus = "success";

const orders = ["12", "20", "25"];
let currentOrder: string | undefined;
for (let order of orders) {
  if (order == "25") {
    currentOrder = order;
    break;
  }
}
console.log(currentOrder);
// Avoid Any type
