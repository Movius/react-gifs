import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";
import { act, renderHook } from "@testing-library/react";


describe("useCounter", () => {
    test('should initizate with default values of 10', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.counter).toBe(10);
    });

    test('should increment amount when handleAdd is called', () => {
        const { result } = renderHook(() => useCounter());
        const { handleAdd } = result.current;

        act(() => {
            handleAdd();
        });

        expect(result.current.counter).toBe(11);
    });

    test('should decrement amount when handleSubtract is called', () => {
        const { result } = renderHook(() => useCounter());
        const { handleSubtract } = result.current;

        act(() => {
            handleSubtract();
        });

        expect(result.current.counter).toBe(9);
    });

    test('should reset amount when handleReset is called', () => {
        const { result } = renderHook(() => useCounter());
        const { handleReset, handleAdd } = result.current;

        act(() => {
            handleAdd();
        });

        act(() => {
            handleReset();
        });

        expect(result.current.counter).toBe(10);
    });
});
