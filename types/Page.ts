import { PortableTextBlock } from "sanity"

export type Page = {
  _id: string,
  _createdAt: Date,
  title: string,
  subtitle: string,
  slug: string,
  content: PortableTextBlock[], 
  image: string,
  phone: number,
  email: string,
  facebook: string,
  instagram: string,
  linkedinn: string,
};