import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header>
        <h4 className="head_text text-center">{project.name}</h4>
        <br className="max-md:hidden" />
        <span className="text-gray-400 text-center text-2xl">
          {project.subtitle}
        </span>
        <a
          href={project.url}
          className="colored_text text-l font-semibold uppercase block text-right cursor-pointer hover:text-pink-500 transition mt-5"
          title="Бичлэг үзэх"
          target="_blank"
          rel="noopener noreferrer"
        >
          Бичлэг үзэх
        </a>
      </header>

      {/* Content is here ...*/}
      <div className="content_text text-lg text-gray-700 mt-10">
        <PortableText value={project.content} />
      </div>

      {/* Image is here .....*/}
      <Image
        src={project.image}
        alt={project.name}
        width={500}
        height={500}
        className="mt-10"
      />
    </div>
  );
}
