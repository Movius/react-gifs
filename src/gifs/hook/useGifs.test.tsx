import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import { renderHook } from "@testing-library/react";
import { act } from "react";
import * as gifActions from "../actions/get-gifs-by-query.action";


describe('useGifs', () => {
    test('should return default values and methods', () => {
        const { result } = renderHook(() => useGifs());

        expect(result.current.gifs).toEqual([]);
        expect(result.current.previousSearches).toEqual([]);
        expect(typeof result.current.handleSearch).toBe('function');
        expect(typeof result.current.handleSearchClicked).toBe('function');
    });

    test('should return a list of gifs', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleSearch('matrix');
        });

        expect(result.current.gifs.length).toBe(10);
    });

    test('should return a list of gifs when handleSearchClicked is called', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleSearchClicked('matrix');
        });

        expect(result.current.gifs.length).toBe(10);
    });

    test('should return a list of gifs from cache when handleSearchClicked is called with the same term', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleSearchClicked('matrix');
        });

        expect(result.current.gifs.length).toBe(10);

        vi.spyOn(gifActions, 'getGifsByQuery')
            .mockRejectedValue(new Error('This function should be cache'));

        await act(async () => {
            await result.current.handleSearchClicked('matrix');
        });

        expect(result.current.gifs.length).toBe(10);
    });


    test('should return no more than 8 previous terms', async () => {
        const { result } = renderHook(() => useGifs());

        vi.spyOn(gifActions, 'getGifsByQuery')
            .mockResolvedValue([]);

        await act(async () => {
            await result.current.handleSearch(`goku1`);
        });
        await act(async () => {
            await result.current.handleSearch(`goku2`);
        });
        await act(async () => {
            await result.current.handleSearch(`goku3`);
        });
        await act(async () => {
            await result.current.handleSearch(`goku4`);
        });
        await act(async () => {
            await result.current.handleSearch(`goku5`);
        });
        await act(async () => {
            await result.current.handleSearch(`goku6`);
        });
        await act(async () => {
            await result.current.handleSearch(`goku7`);
        });
        await act(async () => {
            await result.current.handleSearch(`goku8`);
        });
        await act(async () => {
            await result.current.handleSearch(`goku9`);
        });
        await act(async () => {
            await result.current.handleSearch(`goku10`);
        });

        expect(result.current.previousSearches.length).toBe(8);
        expect(result.current.previousSearches).toStrictEqual([
            "goku10",
            "goku9",
            "goku8",
            "goku7",
            "goku6",
            "goku5",
            "goku4",
            "goku3",
        ]);
    });
});
