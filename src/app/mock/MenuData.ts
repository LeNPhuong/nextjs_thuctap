export interface menuIF {
  name: String;
  menuSub?: { name: String }[];
  strLink: String;
}

export const dataMenu: menuIF[] = [
  {
    name: "all brands",
    menuSub: [
      { name: "Brand Name" },
      { name: "Brand Name" },
      { name: "Brand Name" },
      { name: "Brand Name" },
      { name: "Brand Name" },
      { name: "Brand Name" },
      { name: "Brand Name" },
      { name: "Brand Name" },
      { name: "Brand Name" },
      { name: "Brand Name" },
    ],
    strLink: "/",
  },
  {
    name: "skincare",
    strLink: "/",
  },
  {
    name: "make up",
    strLink: "/",
  },
  {
    name: "hair care",
    strLink: "/",
  },
  {
    name: "bath & body",
    strLink: "/",
  },
  {
    name: "beauty supplements",
    strLink: "/",
  },
  {
    name: "promos",
    strLink: "/",
  },
];
