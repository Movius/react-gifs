import type { FC } from 'react';
import type { Gif } from '../interfaces/gif.interface';

interface GifListProps {
    gifList: Gif[] | undefined;
}

export const GifList: FC<GifListProps> = ({ gifList }: { gifList: Gif[] | undefined }) => {
    return (
        <div className="gifs-container">
            {gifList && gifList.map((gifItem) => (
                <div key={gifItem.id} className="gif-card">
                    <img src={gifItem.url} alt={gifItem.title} />
                    <h3>{gifItem.title}</h3>
                    <p>
                        {gifItem.width} x {gifItem.height} (1.5mb)
                    </p>
                </div>
            ))}
        </div>
    )
}
