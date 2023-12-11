import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import clientConfig from './config/client-config'
import { Page } from "@/types/Page";
import { Post } from "@/types/Post"

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      subtitle,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
    }`
  )
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      subtitle,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
    }`,
    { slug }
  )
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      title,
      "slug": slug.current,
    }`
  )
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      subtitle,
      "slug": slug.current,
      content,
      "image": image.asset->url,
      phone,
      email,
      facebook,
      instagram,
      linkedinn
    }`,
    { slug }
  )
}

// Блог хуудасны api 

export async function getPosts(): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"]{ 
      _id,
      _createdAt,
      title,
      subtitle,
      "slug": slug.current,
      "image": image.asset->url,
      content,
    }`
  )
}

export async function getPost(slug: string): Promise<Post> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{ 
      _id,
      _createdAt,
      title,
      subtitle,
      "slug": slug.current,
      "image": image.asset->url,
      content,
    }`,
    { slug }
  )
}

