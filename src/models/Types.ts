import{ ReactNode } from 'react';

// Defines the structure of each individual card
export type CardProps = {
  title: string;
  image: string;
  description?: string;
  foodIcon?: string;
  price?: number;
  rating?: string;
  customClass?: string;
};


// Represents a collection of cards
export type Cards = {
  cards: CardProps[];
};

// Specifies props for the CustomCardsSection component
export type CustomCardsSectionProps = {
  cardsData: Cards;
  cardType: number;
  pageType:number;
};

// Enumerates different types of cards
export enum CardType {
  RestaurantType = 1,
  DishType = 2,
  ChefRestaurantType = 3,
}
export enum PagesType {
  HomePage=1,
  RestaurantsPage = 2,
  OrdersPage = 3
}
// Specifies props for IconsMeaning component
export type IconsMeaningProps = {
  icons: {
    name: string,
    image: string;
  }[];
};

// Specifies props for ChefWeek component
export type ChefWeekProps = {
  chefDetails: {
    fName: string,
    lName: string,
    image: string,
    description: string;
  };
};

// Specifies props for the AboutUsSec component
export type AboutUsSec = {
  epicLogo: string;
  googleLogo: string;
  appleLogo: string;
  title: string;
  firstP: string;
  seconedP: string;
};
