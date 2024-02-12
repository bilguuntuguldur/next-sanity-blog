import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import NewsletterSection from "@/components/newsletter/newsletter-section"

export const revalidate = 0;

export default async function Home() {

  const projects = await getProjects();


  return (
    <section className="w-full flex-center flex-col">
      <h4 className="head_text text-center">
        Дайтаж буй мэт амьдар!
        <br className="max-md:hidden" />
        <span className="green_gradient text-center">Сайт хөгжүүлэгч</span>
      </h4>
      <p className="desc text-center">
        Хэнч орж уншихгүй байсан ч блогоо үргэлжлүүлэн хийсээр байна (Өөртөө
        өгсөн бяцхан амлалт). Энд өөрийн уншиж мэдсэн зүйлүүдээ бусадтай
        хуваалцана (Ер нь ирээдүйн би л орж унших байхөө ккк).
      </p>

      <div className="w-full mx-auto my-16">
        <h1 className="text-3xl font-extra-bold uppercase">
          Тавтай морилно уу! <span className="colored_text">Бэки байна.</span>
        </h1>

        <p className="text-xl text-gray-400">
          Орчин үеийн вэб технологийн талаарх мэдээ мэдээлэлийг эндээс.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project._id}
              className="rounded-xl bg-slate-100 dark:bg-slate-800 hover:scale-105 transition"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={550}
                  height={250}
                  className="object-cover rounded-xl border-gray-500"
                />
              )}
              <div className="text-lg p-4 pb-0 text-sky-500 dark:text-sky-400">
                {project.name}
              </div>
              <div className="px-6 pb-4 text-l text-slate-700 dark:text-slate-500">
                - {project.subtitle}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full mx-auto my-16 font-semibold">
        <NewsletterSection />
      </div>
    </section>
  );
}
