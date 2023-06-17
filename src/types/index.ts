enum Category {
  'desserts',
  'drinks',
  'icecreams',
}

export type CategoryString = keyof typeof Category;

export type CategoryItemType = {
  id: string;
  attributes: {
    createdAt: string;
    name: CategoryString;
    publishedAt: string;
    updatedAt: string;
  };
};

export type DishItemType = {
  id: string;
  attributes: {
    createdAt: string;
    name: string;
    description: string;
    imgURL: string;
    publishedAt: string;
    updatedAt: string;
  };
};

export type InitialStateType = {
  categoryList: Array<CategoryItemType>;
  dishesList: Array<DishItemType>;
  choosedCategory: null | CategoryString;
  choosedDish: DishItemType;
};
