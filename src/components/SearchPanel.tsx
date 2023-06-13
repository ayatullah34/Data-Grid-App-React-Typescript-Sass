import React, { useState } from 'react';
import searchIcon from '../../public/assets/search-icon.svg';

interface SearchPanelProps {
    placeholder: string;
    onSearch: (value: string) => void;
}

const SearchPanel: React.FC<SearchPanelProps> = ({ placeholder, onSearch }) => {

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value?.length >= 3 || value?.length === 0 ) {
            onSearch(value);
        }
    };

    return (
        <div className="search">
            <input
                type="text"
                onChange={handleSearch}
                placeholder={placeholder}
            />
            <div className="search-icon">
                <img
                    src={searchIcon}
                    alt="search-icon"
                />
            </div>
        </div>
    );
};

export default SearchPanel;
