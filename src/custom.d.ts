declare module "*.svg" {
  const content: string;
  export default content;
}

export type Post = {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  categories: string[];
  content: string;
}

export type ContactForm = {
  name: string;
  email: string;
  message: string;
}