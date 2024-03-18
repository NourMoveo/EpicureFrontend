import { ReactNode } from 'react';

// Defines the structure of each individual card

export type CardProps = {
  // common
  id?:string;
  title?: string;
  image: string;
  customClass?: string;
    description?: string;
    // restaurants
    rating?: number;
    dishes?: Cards;
    open?: Date; // Regular opening time
    close?: Date; // Regular closing time
    maxPrice?: Number;
    minPrice?:Number;
    distance?:Number;
    // dish
    foodIcon?: string;
    price?: number;
    MealType?: DishType;
    isSignature?:boolean;
    dishSides?: string[];
    changes?: string[];
    

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

export enum DishType {
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
  layoutDirection?:string; 
  onItemClick?:(restaurantId: string| undefined) => void;
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
    restaurants:Cards;
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

export type ChefsProps = {
  chefs:ChefProps[];
};

export type ChefProps = {
  fName: string;
  lName: string;
  image: string;
  description: string;
  restaurants:Cards;
};
