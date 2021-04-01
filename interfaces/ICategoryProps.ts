export interface ICategoryProps {
  id: string;
  heading: string;
  cards: Array<ICategoryCard>;
}

interface ICategoryCard {
  id: string;
  title: string;
  background_image: string;
  outbound_link: string;
}
