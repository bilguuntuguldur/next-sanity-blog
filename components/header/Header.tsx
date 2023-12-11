import Link from 'next/link';
import DarkModeToggle from '../toggle/DarkModeToggle';
import { getPages } from '@/sanity/sanity-utils';

 

async function Header(){

    {/* all pages bring here from backend */}
    const pages = await getPages();

    return (

        <nav className='flex-between w-full mt-4 mb-16'>
            <Link href="/" className='flex gap-2 flex-center'>
                <p className='logo_main'>Beki</p>
            </Link>

            <div className='primary_menu'>
                <ul className="menu flex gap-4">
                    <DarkModeToggle />
                    {pages.map((page) => (
                     <li className="menu_item hover:unederline" key={page._id}><Link href={`/${page.slug}`}>{page.title}</Link></li>
                    ))}
                </ul>
            </div>
            <div className='login_menu sm:flex hidden'>
                <button type="button"className='outline_btn'>
                    Гарах
                </button>

            </div> 
        </nav>
    )
}

export default Header;