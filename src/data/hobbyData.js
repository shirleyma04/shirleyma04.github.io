import poppyWars from "../assets/Reading/poppy-wars.png";
import sixOfCrows from "../assets/Reading/six-of-crows.png";
import oneLastStop from "../assets/Reading/one-last-stop.png";

import flowers from "../assets/Crocheting/flowers.png";
import cow from "../assets/Crocheting/cow.png";
import doily from "../assets/Crocheting/doily.png";

import minecraft from "../assets/Gaming/minecraft.png";
import sims from "../assets/Gaming/sims.png";
import stardew from "../assets/Gaming/stardew.png";

import london from "../assets/Traveling/london.png";
import china from "../assets/Traveling/china.png";
import paris from "../assets/Traveling/paris.png";

import bagels from "../assets/Baking/bagels.png";
import cake from "../assets/Baking/cake.png";
import cookies from "../assets/Baking/cookies.png";

const hobbies = [
  {
    slug: "reading",
    emoji: "📖",
    title: "Reading",
    description:
      "I'm currently reading The Dragon Republic (the second book in the Poppy Wars trilogy) by R.F. Kuang. Two of my favorite books are Six of Crows by Leigh Bardugo and One Last Stop by Casey Mcquiston.",
    highlightedWords: ["The Dragon Republic", "Six of Crows", "One Last Stop"],
    images: [poppyWars, sixOfCrows, oneLastStop],
  },
  {
    slug: "crocheting",
    emoji: "🧶",
    title: "Crocheting",
    description:
      "I have been crocheting since 2022. I love gifting crochet to friends and family! Here are some of the projects I'm most proud of.",
    highlightedWords: ["2022", "gifting crochet", "most proud"],

    images: [flowers, cow, doily],
  },
  {
    slug: "gaming",
    emoji: "🎮",
    title: "Gaming",
    description:
      "I enjoy playing video games such as Minecraft, Sims 4, and Stardew Valley in my spare time.",
    highlightedWords: ["Stardew Valley", "Sims 4", "Minecraft"],
    images: [minecraft, sims, stardew],
  },
  {
    slug: "traveling",
    emoji: "✈️",
    title: "Traveling",
    description:
      "I love visiting new places and trying new foods! My favorite places to travel have been London, China, and Paris.",
    highlightedWords: ["new places", "new foods", "London", "Paris", "China"],
    images: [london, china, paris],
  },
  {
    slug: "baking",
    emoji: "🍪",
    title: "Baking",
    description:
      "Baking is my favorite way to destress. From bagels to cakes to cookies, I love both sweet and savory. Fun fact: my sourdough starter's name is Luna!",
    highlightedWords: ["destress", "sweet and savory", "Luna"],
    images: [bagels, cake, cookies],
  },
];

export default hobbies;
