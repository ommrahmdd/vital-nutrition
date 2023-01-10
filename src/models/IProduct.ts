export type IProduct = {
  images: string[];
  _id: string;
  en: {
    details: string;
    direction: string[];
    midTitle: string;
    storage: string;
    title: string;
    types: string[];
  };
  ar: {
    details: string;
    direction: string[];
    midTitle: string;
    storage: string;
    title: string;
  };
};
