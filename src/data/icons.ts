import { IIcon } from "../models";
import iconImage1 from "../images/1.jpg";
import iconImage2 from "../images/2.jpg";
import iconImage5 from "../images/5.jpg";
import iconImage6 from "../images/6.jpg";

export const iconsData: IIcon[] = [
  {
    title: "Спиридон Тримифунтский",
    subtitle: "МОЗАИЧНАЯ ИКОНА",
    description:
      "Краснодарский край, Горячий ключ, храм Казанской Божьей Матери",
    image: `${iconImage2}`,
    key: 1,
  },
  {
    title: "Богородица",
    subtitle: "МОЗАИЧНАЯ ИКОНА",
    description: "Храм Владимирской Божьей Матери, г. Москва, Куркино",
    image: `${iconImage5}`,
    key: 2,
  },
  {
    title: "Вера, Надежда, Любовь и их мать София",
    subtitle: "МОЗАИЧНАЯ ИКОНА",
    description: "Свято Покровский женский монастырь в г. Толчин Беларусь",
    image: `${iconImage6}`,
    key: 3,
  },
  {
    title: "Николай Чудотворец",
    subtitle: "МОЗАИЧНАЯ ИКОНА",
    description:
      "Краснодарский край, Горячий ключ, храм Казанской Божьей Матери",
    image: `${iconImage1}`,
    key: 4,
  },
];
