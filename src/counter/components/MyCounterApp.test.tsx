import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe("MyCounterApp", () => {
    test('should render component', () => {
        render(<MyCounterApp />);
        screen.debug();

        expect(screen.getByRole('heading', { level: 1 }).innerHTML)
            .toContain(`counter : 10`);

        expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
        expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
        expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
    });

    test('should increment the counter', () => {
        render(<MyCounterApp />);

        const btnAdd = screen.getByRole('button', { name: '+1' });
        fireEvent.click(btnAdd);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML)
            .toContain(`counter : 11`);
    });

    test('should decrement the counter', () => {
        render(<MyCounterApp />);

        const btnSubtract = screen.getByRole('button', { name: '-1' });
        fireEvent.click(btnSubtract);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML)
            .toContain(`counter : 9`);
    });

    test('should reset the counter', () => {
        render(<MyCounterApp />);

        const btnAdd = screen.getByRole('button', { name: '+1' });
        fireEvent.click(btnAdd);

        const btnReset = screen.getByRole('button', { name: 'Reset' });
        fireEvent.click(btnReset);


        expect(screen.getByRole('heading', { level: 1 }).innerHTML)
            .toContain(`counter : 10`);
    });
});
