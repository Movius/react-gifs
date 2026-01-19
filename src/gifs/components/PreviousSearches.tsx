import type { FC } from "react";

interface PreviousSearchesProps {
    title: string;
    searches: string[];

    onLabelClicked: (search: string) => void;
}

export const PreviousSearches: FC<PreviousSearchesProps> = ({ title, searches, onLabelClicked }) => {
    return (
        <div className="previous-searches">
            <h2>{title}</h2>
            <ul className="previous-searches-list">
                {searches.map((search) => (
                    <li key={search} onClick={() => onLabelClicked(search)}>{search}</li>
                ))}
            </ul>
        </div>
    )
}
