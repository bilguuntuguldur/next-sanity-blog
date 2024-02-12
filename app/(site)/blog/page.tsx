import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { getPosts } from "@/sanity/sanity-utils";

export const revalidate = 0;

const BlogPage = async () => {
    
    const posts = await getPosts();

    return(
        <div className="w-full mx-auto my-16 font-semibold">
            <p className="py-2 text-xl uppercase">Блог</p>
            <h4 className="text-2xl font-extrabold pb-5">
                Бидний амьдарлыг сонирхолтой болгох бяцхан жор, <br />
                <span>шинэ зүйл туршиж үзэх хэрэгтэй...</span>
            </h4>
            <Link href={""} className="text-teal-500 text-lg">Keep going... </Link> 

            {posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post._id}>
                <div className="my-10 flex-wrap sm:flex md:flex">
                    <div className="sm:w-1/2 gap-2 md:w-1/3">
                    <Image
                        src={post.image}
                        alt={post.title}
                        width={250}
                        height={250}
                        className="object-cover border-gray-500 w-80 h-60 rounded-xl"
                    />
                    </div>
                    <div className="sm:w-1/2 gap-2 md:w-2/3 p-5">
                    <div>
                        <p className="text-base font-medium leading-6 text-teal-500">
                        {new Date(post._createdAt).toISOString().split("T")[0]}
                        </p>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold leading-9 sm:text-2xl sm:leading-10 md:text-3xl">
                        {post.title}
                        </h1>
                    </div>
                    <div className="h-32 overflow-hidden pt-7">
                        <PortableText value={post.content} />
                    </div>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    )

}

export default BlogPage