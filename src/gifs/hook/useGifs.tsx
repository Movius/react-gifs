import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

export const useGifs = () => {
    const [gifs, setGifs] = useState<Gif[]>([])
    const [previousSearches, setPreviousSearches] = useState<string[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleSearchClicked = async (term: string) => {
        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }

        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
        gifsCache.current[term] = gifs;
    }

    const handleSearch = async (query: string = '') => {
        query = query.toLocaleLowerCase().trim();
        if (query.length === 0) return;
        if (previousSearches.includes(query)) return;
        if (previousSearches.length >= 8) {
            previousSearches.pop();
        }
        setPreviousSearches([query, ...previousSearches]);

        const gifs = await getGifsByQuery(query);
        setGifs(gifs);

        gifsCache.current[query] = gifs;
        console.log(gifsCache.current);
    }

    return {
        // Values
        gifs,
        previousSearches,
        // Methods / Actions
        handleSearch,
        handleSearchClicked
    }
}
