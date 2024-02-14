export interface IBooks {
  title: string;
  author: string;
  star: number;
  book_image: string;
  description: string;
  publisher: string;
  buy_links: {
    name: string;
    url: string;
  }
}