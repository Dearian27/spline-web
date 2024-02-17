interface IPricingCard {
  price: number;
  title: string;
  benefits: string[];
  id: number;
  oneliner: string;

}

const pricingCards: IPricingCard[] = [
  {
    price: 49,
    title: "Insightful Pro",
    benefits: [
      "Predictive lead scoring",
      "Automated content creation",
      "Predictive lead scoring",
      "Automated content creation"
    ],
    id: 1,
    oneliner: "AI-powered sales tools for focused revenue growth",
  },
  {
    price: 99,
    title: "Insightful Pro",
    benefits: [
      "Predictive lead scoring",
      "Automated content creation",
      "Predictive lead scoring",
      "Automated content creation"
    ],
    id: 2,
    oneliner: "AI-powered sales tools for focused revenue growth",
  },
]

export default pricingCards;