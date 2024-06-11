import {
  TemplateOne,
  TemplateTwo,
  TemplateThree,
  TemplateFour,
} from "./modern-template";
import {
  TemplateOneA,
  TemplateTwoA,
  TemplateThreeA,
  TemplateFourA,
} from "./artistic-templates";

export const modernTemplates = [
  {
    element: TemplateOne,
    name: "Tabulio",
    about:
      "When you know you're a natural fit, the conversation is warm, you get that fuzzy feeling, and every fiber of your being says you're perfect for this job, there's no better design than Tabulio",
    themeColors: ["#2F635A", "#FECB00"],
    id: "modern_1",
  },
  {
    element: TemplateTwo,
    name: "Placard",
    about:
      "When you know you're a natural fit, the conversation is warm, you get that fuzzy feeling, and every fiber of your being says you're perfect for this job, there's no better design than Placard",
    themeColors: ["white"],
    id: "modern_2",
  },
  {
    element: TemplateThree,
    name: "Try",
    about: "",
    themeColors: ["white"],
    id: "modern_3",
  },
  {
    element: TemplateFour,
    name: "Pio",
    about: "",
    themeColors: ["white"],
    id: "modern_4",
  },
];

export const artisticTemplates = [
  {
    element: TemplateOneA,
    name: "",
    about: "",
    themeColors: ["", ""],
    id: "artistic_1",
  },
  // {
  //   element: TemplateTwoA,
  //   name: "",
  //   about: "",
  //   themeColors: ["", ""],
  //   id: "artistic_2",
  // },
  // {
  //   element: TemplateThreeA,
  //   name: "",
  //   about: "",
  //   themeColors: ["", ""],
  //   id: "artistic_3",
  // },
  // {
  //   element: TemplateFourA,
  //   name: "",
  //   about: "",
  //   themeColors: ["", ""],
  //   id: "artistic_4",
  // },
];
