import { useEffect, useState } from "react";
import type { KeyboardEvent } from "react";

interface CustomSearchProps {
    placeholder: string;
    buttonText: string;
    onQuery: (query: string) => void;
}
export const CustomSearch = ({ placeholder, buttonText, onQuery }: CustomSearchProps) => {
    const [query, setquery] = useState('');

    useEffect(() => {
        const timOutId = setTimeout(() => {
            onQuery(query);
        }, 700);

        return () => {
            clearTimeout(timOutId);
        };
    }, [query, onQuery]);

    const handleSearch = () => {
        onQuery(query);
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={e => setquery(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>{buttonText}</button>
        </div>
    )
}
