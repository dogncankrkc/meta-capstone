import GreekSaladImage from "../assets/images/greek-salad.jpg";
import BruschettaImage from "../assets/images/bruschetta.jpg";
import LemonDessertImage from "../assets/images/lemon-dessert.jpg";
import EmilyDavisAvatar from "../assets/images/emily-davis.png";
import JohnDoeAvatar from "../assets/images/john-doe.png";
import JaneSmithAvatar from "../assets/images/jane-smith.png";
import MichaelJohnsonAvatar from "../assets/images/michael-johnson.png";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";

export const specialsData = [
  {
    id: 1,
    title: "Greek Salad",
    description:
      "A refreshing salad with crisp lettuce, juicy tomatoes, cucumbers, olives, and feta cheese, dressed with olive oil and lemon juice.",
    price: "$12.99",
    image: GreekSaladImage,
    cta: "Order for a delivery",
    icon: faBicycle,
  },
  {
    id: 2,
    title: "Bruschetta",
    description:
      "Grilled bread topped with a mixture of diced tomatoes, garlic, basil, and olive oil. A classic Italian appetizer.",
    price: "$8.99",
    image: BruschettaImage,
    cta: "Order for a delivery",
    icon: faBicycle,
  },
  {
    id: 3,
    title: "Lemon Dessert",
    description:
      "A zesty lemon dessert with a light and fluffy texture, topped with a tangy lemon glaze. Perfect for citrus lovers.",
    price: "$6.99",
    image: LemonDessertImage,
    cta: "Order for a delivery",
    icon: faBicycle,
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    avatar: JohnDoeAvatar,
    rating: 5,
    testimonial:
      "The food at Little Lemon is absolutely amazing! The flavors are authentic and the service is top-notch. Highly recommend!",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: JaneSmithAvatar,
    rating: 5,
    testimonial:
      "I had a wonderful dining experience at Little Lemon. The ambiance is cozy and inviting, and the staff is friendly and attentive.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    avatar: MichaelJohnsonAvatar,
    rating: 5,
    testimonial:
      "Little Lemon never disappoints! The dishes are always fresh and delicious. It's my go-to place for Mediterranean cuisine.",
  },
  {
    id: 4,
    name: "Emily Davis",
    avatar: EmilyDavisAvatar,
    rating: 5,
    testimonial:
      "I love the variety of options on the menu at Little Lemon. There's something for everyone, and the quality of the food is exceptional.",
  },
];
