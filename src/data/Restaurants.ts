import { Cards,CardType,PagesType } from "../models/Types";
import { claroRestau,FourStarsIcon,Lumina,TigerLilly ,ThreeStarsIcon } from "../assets/homePhotos";
import DishesData from  "../data/Dishes";
const RestaurantsData: Cards = {
  cards: [
    {
      title: "Claro",
      image: claroRestau,
      description: "Ran Shmueli",
      rating:FourStarsIcon,
      dishes: {
        cardsData: { cards:DishesData.cards },
        cardType: CardType.DishType,
        pageType: PagesType.HomePage
      },
      minPrice:65,
      maxPrice:98,
    }, {
      title: "Lumina",
      image: Lumina,
      description: "Meir Adoni",
      rating:ThreeStarsIcon,
      dishes: {
        cardsData: { cards: DishesData.cards},
        cardType: CardType.DishType,
        pageType: PagesType.HomePage
      },
      minPrice:65,
      maxPrice:98,
    }, {
      title: "Tiger Lilly",
      image: TigerLilly,
      description: "Yanir Green",
      rating:FourStarsIcon,
      dishes: {
        cardsData: { cards: DishesData.cards},
        cardType: CardType.DishType,
        pageType: PagesType.HomePage
      },
      minPrice:65,
      maxPrice:98,
    }, {
      title: "Tiger Lilly",
      image: TigerLilly,
      description: "Yanir Green",
      rating:FourStarsIcon,
      dishes: {
        cardsData: { cards: DishesData.cards},
        cardType: CardType.DishType,
        pageType: PagesType.HomePage
      },
      minPrice:65,
      maxPrice:98,
    }, {
      title: "Tiger Lilly",
      image: TigerLilly,
      description: "Yanir Green",
      rating:FourStarsIcon,
      dishes: {
        cardsData: { cards:DishesData.cards},
        cardType: CardType.DishType,
        pageType: PagesType.HomePage
      },
      minPrice:65,
      maxPrice:98,
    },{
      title: "Claro",
      image: claroRestau,
      description: "Ran Shmueli",
      rating:FourStarsIcon,
      dishes: {
        cardsData: { cards:DishesData.cards},
        cardType: CardType.DishType,
        pageType: PagesType.HomePage
      },
      minPrice:65,
      maxPrice:98,
    }, {
      title: "Lumina",
      image: Lumina,
      description: "Meir Adoni",
      rating:ThreeStarsIcon,
      dishes: {
        cardsData: { cards:DishesData.cards},
        cardType: CardType.DishType,
        pageType: PagesType.HomePage
      },
      minPrice:65,
      maxPrice:98,
    }, {
      title: "Tiger Lilly",
      image: TigerLilly,
      description: "Yanir Green",
      rating:FourStarsIcon,
      dishes: {
        cardsData: { cards:DishesData.cards},
        cardType: CardType.DishType,
        pageType: PagesType.HomePage
      },
      minPrice:65,
      maxPrice:98,
    }, {
      title: "Tiger Lilly",
      image: TigerLilly,
      description: "Yanir Green",
      rating:FourStarsIcon,
      dishes: {
        cardsData: { cards:DishesData.cards},
        cardType: CardType.DishType,
        pageType: PagesType.HomePage
      },
      minPrice:65,
      maxPrice:98,
    }, {
      title: "Tiger Lilly",
      image: TigerLilly,
      description: "Yanir Green",
      rating:FourStarsIcon,
      dishes: {
        cardsData: { cards:DishesData.cards},
        cardType: CardType.DishType,
        pageType: PagesType.HomePage
      },
      minPrice:65,
      maxPrice:98,
    },],
};

export default RestaurantsData;