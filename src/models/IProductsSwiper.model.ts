export type IProductsSwiper = {
  smallTitle: string;
  mainTitle: string;
  mainTitleColor: string;
  midTitle: string;
  products: any; //TODO: create an interface for it
  viewMore?: {
    textStr: string;
    to: string;
  };
};
