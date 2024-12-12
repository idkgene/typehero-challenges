type GroceryList = {
  [item: string]: number;
};

type InappropriateActionBySituation = {
  [situation: string]: string[];
};

type CharactersById = {
  [id: number]: {
    id: number;
    name: string;
    status: string;
    species: string;
  };
};
