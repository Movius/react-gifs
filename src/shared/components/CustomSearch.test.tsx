import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { CustomSearch } from "./CustomSearch";

describe("CustomSearch", () => {
    test('should searchbar render correctly', () => {
        const { container } = render(<CustomSearch placeholder="" buttonText="" onQuery={() => { }} />);

        expect(container).toMatchSnapshot();
    });

    test('should call onQuery with the correct value after 700ms of typing', async () => {
        const onQuery = vi.fn();
        render(<CustomSearch placeholder="" buttonText="" onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });
        await waitFor(() => {
            expect(onQuery).toHaveBeenCalled();
            expect(onQuery).toHaveBeenCalledWith('test');
        });
    });

    test('should call only once with the las value (debounce)', async () => {
        const onQuery = vi.fn();
        render(<CustomSearch placeholder="" buttonText="" onQuery={onQuery} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 't' } });
        fireEvent.change(input, { target: { value: 'te' } });
        fireEvent.change(input, { target: { value: 'tes' } });
        fireEvent.change(input, { target: { value: 'test' } });

        await waitFor(() => {
            expect(onQuery).toHaveBeenCalledTimes(1);
            expect(onQuery).toHaveBeenCalledWith('test');
        });
    });

    test('should call onQuery when button clicked with the input value', async () => {
        const onQuery = vi.fn();
        render(<CustomSearch placeholder="" buttonText="" onQuery={onQuery} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });
        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(onQuery).toHaveBeenCalledTimes(1);
        expect(onQuery).toHaveBeenCalledWith('test');
    });

    test('should the input search have search and button text placeholders', () => {
        const placeholder = "search placeholder";
        const buttonText = "button text";
        render(<CustomSearch placeholder={placeholder} buttonText={buttonText} onQuery={() => { }} />);

        screen.debug();

        expect(screen.getByPlaceholderText(placeholder)).toBeDefined();
        expect(screen.getByRole('button').innerHTML).toBe(buttonText);
    });

});
