export interface User {
  name: {
    title?: string;
    first: string;
    middle?: string;
    last: string;
  },
  email: string;
  picture?: {
    large: string;
    medium: string;
    thumbnail: string;
  }
}