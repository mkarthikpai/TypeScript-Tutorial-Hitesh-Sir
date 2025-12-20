import "./App.css";
import { ChaiCard } from "./components/ChaiCard";
import { Counter } from "./components/Counter";
import { ChaiList } from "./components/ChaiList";

import type { Chai } from "./types";
import { OrderForm } from "./components/OrderForm";
import { Card } from "./components/Card";

const menu: Chai[] = [
  { id: 1, name: "Masala", price: 30 },
  { id: 2, name: "Ginger", price: 40 },
  { id: 3, name: "Lemon", price: 20 },
];

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <ChaiCard name="Headphones" price={5000} />
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu} />
      </div>
      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("Placed: ", order.name, order.cups);
          }}
        />
      </div>
      <div>
        <Card title="Chai aur typescript" footer={<p>Order Now</p>} />
      </div>
    </>
  );
}

export default App;
