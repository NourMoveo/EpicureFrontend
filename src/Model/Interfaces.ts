export interface Restaurant {
  _id: string;
  title: string;
  image: string;
  rating: number;
  open:Date;
  close:Date;
  maxPrice:number;
  minPrice:number;
  distance:number;
  chef: string;
  dishes: Dish[];
}
export interface Dish {
  _id: string;
  title: string;
  image: string;
  ingredients: string;
  flavorIcon: string;
  price: number;
  restaurant: string;
  isSignature:boolean;
  type:string;
  dishSides: string[];
  changes: string[];
}

export interface Chef {
  _id: string;
  fName: string;
  lName: string;
  image: string;
  description: string;
  restaurants: Restaurant[];
  isChefOfTheWeek: boolean;
  isMostViewedChef:boolean;
}

export interface IconsMeaningProps {
  icons: {
    name: string,
    image: string;
  }[];
}

export interface AboutUsSec {
  epicLogo: string;
  googleLogo: string;
  appleLogo: string;
  title: string;
  firstP: string;
  secondP: string;
}

export enum CardType {
  RestaurantType = 1,
  DishType = 2,
  ChefRestaurantType = 3,
}

export enum PagesType {
  HomePage = 1,
  RestaurantsPage = 2,
  OrdersPage = 3
}