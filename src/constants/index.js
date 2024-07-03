import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Product", "Details", "Vision", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Effy Autoclave",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
        videoDuration: 11,
  },
  {
    id: 2,
      textLists: ["Cycle", "Less Time. Less Water. Lesser Energy."],
    video: highlightSecondVideo,
    videoDuration: 29,
  },
  {
    id: 3,
    textLists: [
      "Secret Sauce",
      "50% reduction in energy",
    ],
    video: highlightThirdVideo,
    videoDuration: 29,
  },
  {
    id: 4,
    textLists: ["Delivering Cleaner Future.", "Join the revolution."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '<200 Ltrs"', value: "small" },
  { label: '>1000 Ltrs"', value: "large" },
];

export const footerLinks = [
  "LinkedIn",
  "Contribute",
  "Contact",
];