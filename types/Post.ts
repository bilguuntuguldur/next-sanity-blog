import { PortableTextBlock } from "sanity";

export type Post = {
  _id: string;
  _createdAt: Date;
  title: string;
  subtitle: string;
  slug: string;
  image: string;
  content: PortableTextBlock[];
}