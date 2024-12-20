export type GroceryItem<Name, Price, InStock> = {
  name: Name;
  price: Price;
  inStock: InStock;
};

export type CapreseSalad = GroceryItem<'Caprese Salad', 14.99, true>;

export type GroceryStore<Name, City> = {
  name: Name;
  city: City;
};
