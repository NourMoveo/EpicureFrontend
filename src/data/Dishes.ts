import { Cards } from "../models/Types";
import { PadKiMao,GarbanzoFrito,SmokedPizza, SpicyFoodIcon,VeganIcon } from '../assets/homePageImg';

const DishesData: Cards = {
  cards: [
    {
      title: "Pad Ki Mao",
      image: PadKiMao,
      description: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
      foodIcon: SpicyFoodIcon,
      price: 88,
    }, {
      title: "Garbanzo Frito",
      image: GarbanzoFrito,
      description: "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
      foodIcon: SpicyFoodIcon,
      price: 98,
    }, {
      title: "Pad Ki Mao",
      image: SmokedPizza,
      description: "Basil dough, cashew \"butter\", demi-glace, bison & radish",
      foodIcon: VeganIcon,
      price: 65,
    }
  ],
};

export default DishesData;