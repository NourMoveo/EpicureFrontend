import { ReactNode } from 'react';

// Defines the structure of each individual card

export type CardProps = {
  // common
  title: string;
  image: string;
  customClass?: string;
  children?:ChildNode;
    // dishes & Restaurants 
    description?: string;
    // restaurants
    rating?: string;
    dishes?: CustomCardsSectionProps;
    open?: Date; // Regular opening time
    close?: Date; // Regular closing time
    exceptionOpen?: Date; // Exception opening time
    exceptionClose?: Date; // Exception closing time
    MealType?: MealType;
    maxPrice?: Number;
    minPrice?:Number;
    // dish
    foodIcon?: string;
    price?: Number;
};


// Represents a collection of cards
export type Cards = {
  cards: CardProps[];
};

export enum MealType {
  Breakfast = "Breakfast",
  Lunch = "Lunch",
  Dinner = "Dinner"
}

// Specifies props for the CustomCardsSection component
export type CustomCardsSectionProps = {
  cardsData: Cards;
  cardType: Number;
  pageType: Number;
  minRestauPrice?:Number;
  maxRestauPrice?:Number;
};

// Enumerates different types of cards
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
