import { CustomHeader } from "./shared/components/CustomHeader"
import { CustomSearch } from "./shared/components/CustomSearch"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { GifList } from "./gifs/components/GifList"
import { useGifs } from "./gifs/hook/useGifs"

export const GifsApp = () => {
    const { gifs, previousSearches, handleSearch, handleSearchClicked } = useGifs();

    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" subtitle="Descubre y comparte el gif perfecto" />

            {/* search input */}
            <CustomSearch placeholder="Buscar gifs..." buttonText="buscar" onQuery={handleSearch} />

            {/* Gif previous results */}
            <PreviousSearches title="Busquedas previas" searches={previousSearches} onLabelClicked={handleSearchClicked} />

            {/* Gif results */}
            <GifList gifList={gifs} />
        </>
    )
}
