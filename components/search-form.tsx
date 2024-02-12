"use client"

import React, { useState } from 'react';

interface SearchFormProps {
    onSubmit: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(searchQuery);
    };

    return (
        <form onSubmit={handleSearchSubmit}>
        <label className='relative'>
            <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='Та юу хайж байна вэ?'
            className='w-32 h-10 px-10 rounded-full focus:outline-none relative'
            />
        </label>
        </form>
    );
};

export default SearchForm;