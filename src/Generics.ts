function wrapInArray<T>(item: T): T[] {
  return [item];
}
wrapInArray("MAsala");
wrapInArray(5);
wrapInArray({ flavour: "Ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}
pair("Masala", 15);
pair(15, { sugar: "low" });

// Inteface Generics
interface Box<T> {
  content: T;
}
const numberBox: Box<number> = { content: 5 };
const numberBoxCup: Box<string> = { content: "7" };

interface APIPromise<T> {
  status: number;
  data: T;
}
const res: APIPromise<{ flavour: string }> = {
  status: 200,
  data: { flavour: "Ginger" },
};
