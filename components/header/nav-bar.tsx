"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import DarkModeToggle from "../toggle/DarkModeToggle";
import { getPages } from "@/sanity/sanity-utils";
import { Page } from "@/types/Page";
import Popup from "@/components/popup/search-popup";

function NavBar({ toggle }: { toggle: () => void }) {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const [pages, setPages] = useState<Page[]>([]);

    useEffect(() => {
        const fetchPages = async () => {
        const fetchedPages = await getPages();
        setPages(fetchedPages);
        };

        fetchPages();
    }, []);

    return (
        <nav className="w-full flex justify-between mt-4 mb-16">
        <Link href="/" className="flex gap-2 flex-center">
            <p className="logo_main">Beki</p>
        </Link>

        <div className="primary_menu w-full hidden md:block">
            <ul className="menu flex justify-center gap-4">
                <DarkModeToggle />
                <li className="menu_item hover:unederline">
                    <Link href="/">нүүр</Link>
                </li>
                <li className="menu_item hover:unederline">
                    <Link href="/blog">блог</Link>
                </li>
                {pages.map((page) => (
                    <li className="menu_item hover:unederline" key={page._id}>
                    <Link href={`/${page.slug}`}>{page.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
        <div className="hidden md:flex justify-end md:w-32 lg:w-80">
            <button className="text-white" onClick={togglePopup}>
                <span className="">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="magnify_glass"/>
                </span>
            </button>
            <Popup isOpen={isPopupOpen} onClose={togglePopup} />
        </div>
        <button
            type="button"
            className="inline-flex items-center md:hidden"
            onClick={toggle}
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            >
            <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
            </svg>
        </button>
        </nav>
    );
}

export default NavBar;
