export interface footerIF {
  title: String;
  sublist: { name: String; strLink: String }[];
}

export const dataFooter: footerIF[] = [
  {
    title: "MAIN PAGES",
    sublist: [
      { name: "Sell with US", strLink: "" },
      { name: "About Us", strLink: "" },
      { name: "Contact Us", strLink: "" },
      { name: "Promos", strLink: "" },
      { name: "Become an Ambassador", strLink: "" },
    ],
  },
  {
    title: "POLICY",
    sublist: [
      { name: "Terms of Usage", strLink: "" },
      { name: "Privacy Policy", strLink: "" },
      { name: "Return Policy", strLink: "" },
    ],
  },
  {
    title: "CATEGORIES",
    sublist: [
      { name: "Skincare", strLink: "" },
      { name: "Makeup", strLink: "" },
      { name: "Hair Care", strLink: "" },
      { name: "Bath & Body", strLink: "" },
      { name: "Beauty Suppliments", strLink: "" },
    ],
  },
];
