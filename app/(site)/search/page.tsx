import { Metadata } from 'next';
import Link from "next/link"
import { getPosts } from "@/sanity/sanity-utils";



export function generateMetadata({
    searchParams: {query}
}: SearchPageProps) : Metadata{
    return {
        title: `${query} - Beki`
    }
}

interface SearchPageProps  {
    searchParams: { query: string }
}


export default async function SearchPage({searchParams: {query}}: SearchPageProps) {

    const post = await getPosts();

    const filteredPosts = post.filter( post => post.title.includes(query)

    )

    if(filteredPosts.length === 0 ){
        return (
            <div className='text-center'>
                <h1 className='text-xl font-semibold main_color uppercase'>No post found</h1>
            </div>
        )
    }

    return (
        <div className="w-full h-full flex flex-col gap-4 my-16">
            {filteredPosts.map((data) => (
                    <div key={data.slug} className="w-full h-full">
                        <Link href={`/posts/${data.slug}`}>
                            <h4 className='w-full pb-8'>{data.title}</h4>
                        </Link>
                    </div>
            ))}
        </div>
    )
}