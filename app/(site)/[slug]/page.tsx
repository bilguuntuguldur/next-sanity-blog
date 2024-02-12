import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import HelloPage from "@/components/contact/contact-form";

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div>
      <h4 className="head_text text-center">
        {page.title}
        <br className="max-md:hidden" />
        <span className="subtitle text-2xl text-center">
          {page.subtitle}
        </span>
      </h4>
      <div className="social_icons my-8">
            <ul className="flex felx-right gap-4">
              <li className="flex flex-center gap-2"><FaFacebook /><Link href="https://www.facebook.com/t.bilguuntuguldur/" target="_blank">{page.facebook}</Link></li>
              <li className="flex flex-center gap-2"><FaInstagram /><Link href="https://www.instagram.com/tuguldur.tb/" target="_blank">{page.instagram}</Link></li>
            </ul>
        </div>
      <div className="text-lg mt-10">
        <PortableText value={page.content} />
      </div>

      <div>
        <HelloPage />
      </div>
  </div>
  
  )
}
