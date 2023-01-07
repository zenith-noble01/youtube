import { FaHamburger } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { HiChatAlt2 } from "react-icons/hi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GoSettings } from "react-icons/go";

import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
} from "../Images";

export const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: MdDashboard,
  },
  {
    path: "/foods",
    name: "Foods & Drinks",
    icon: FaHamburger,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: HiChatAlt2,
  },
  {
    path: "/bills",
    name: "Bills",
    icon: RiMoneyDollarCircleFill,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: GoSettings,
  },
];

export const user =
  "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";

export const foods = [
  {
    id: 1,
    image: image1,
    name: "cheese burger",
    price: "10",
    details: [
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
    ],
  },
  {
    id: 2,
    image: image2,
    name: "cheese burger",
    price: "10",
    details: [
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
    ],
  },
  {
    id: 3,
    image: image3,
    name: "cheese burger",
    price: "10",
    details: [
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
    ],
  },
  {
    id: 4,
    image: image4,
    name: "cheese burger",
    price: "10",
    details: [
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
    ],
  },
  {
    id: 5,
    image: image5,
    name: "cheese burger",
    price: "10",
    details: [
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
    ],
  },
  {
    id: 6,
    image: image6,
    name: "cheese burger",
    price: "10",
    details: [
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
    ],
  },
  {
    id: 7,
    image: image7,
    name: "cheese burger",
    price: "10",
    details: [
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
      {
        image: image1,
        desc: "lorem dsndnajdng adnad",
      },
    ],
  },
];
