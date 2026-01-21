import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CustomHeader } from './CustomHeader';

describe('CustomHeader', () => {
    const title = "Test Title";

    test('should render component with title', () => {
        render(<CustomHeader title={title} />);

        expect(screen.getByText(title)).toBeDefined();
    });

    test('should render component with subtitle when provided', () => {
        const subtitle = "Test Subtitle";
        render(<CustomHeader title={title} subtitle={subtitle} />);

        expect(screen.getByText(subtitle)).toBeDefined();
        expect(screen.getByRole('paragraph')).toBeDefined();
        expect(screen.getByRole('paragraph').innerHTML).toBe(subtitle);
    });

    test('should not render subtitle when not provided', () => {
        const { container } = render(<CustomHeader title={title} />);
        const divContainer = container.querySelector('div.content-center');
        const subtitleParagraph = divContainer?.querySelector('p');

        expect(subtitleParagraph).toBeNull();
    });

});
