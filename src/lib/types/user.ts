export interface User {
  id: {
    name: string;
    value: string;
  };
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