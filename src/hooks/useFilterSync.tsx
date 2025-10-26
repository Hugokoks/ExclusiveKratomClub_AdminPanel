// src/hooks/useFilterSync.ts

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// T je generický typ pro tvůj objekt filtrů (např. FilterData)
// S je generický typ pro klíče, podle kterých se dá řadit (např. SortableColumn)
type SortableState<S extends string> = {
    sortBy: S;
    sortOrder: "asc" | "desc";
};

export function useFilterSync<
    T extends SortableState<S>, // Filtry musí obsahovat sortBy a sortOrder
    S extends string // Typ pro řadící klíče
>(
    initialFilterState: T,
    buildFiltersFromParams: (params: URLSearchParams) => T,
    cleanFilters: (filters: T) => Record<string, string> //očekává že vracený objekt musí mít všechny keys a values string
) {
    const [searchParams, setSearchParams] = useSearchParams();

    // queryFilters (co je v URL a posílá se do API)
    const queryFilters = buildFiltersFromParams(searchParams);

    // inputFilters (co je vidět v inputech)
    const [inputFilters, setInputFilters] = useState<T>(queryFilters);

    // EFEKT 1: Synchronizace URL -> Inputy
    // (Když uživatel klikne "zpět" v prohlížeči)
    useEffect(() => {
        setInputFilters(buildFiltersFromParams(searchParams));
    }, [searchParams, buildFiltersFromParams]);

    // EFEKT 2: Debouncing Textových Inputů -> URL
    useEffect(() => {
        // Porovnáváme jen filtry, ne řazení
        const { sortBy: iSort, sortOrder: iOrder, ...inputSearchFilters } = inputFilters;
        const { sortBy: qSort, sortOrder: qOrder, ...querySearchFilters } = queryFilters;

        if (JSON.stringify(inputSearchFilters) !== JSON.stringify(querySearchFilters)) {
            const debounceTimer = setTimeout(() => {
                setSearchParams(cleanFilters(inputFilters));
            }, 500); // 500ms debounce

            return () => clearTimeout(debounceTimer);
        }
    }, [inputFilters, queryFilters, cleanFilters, setSearchParams]);

    // Handler pro TEXTOVÉ inputy (debounced)
    const handleTextChange = (name: keyof T, value: string) => {
        setInputFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    // Handler pro SELECTY (okamžitý)
    const handleSelectChange = (name: keyof T, value: string) => {
        const newFilters = {
            ...inputFilters,
            [name]: value,
        };
        setInputFilters(newFilters);
        setSearchParams(cleanFilters(newFilters));
    };

    // Handler pro ŘAZENÍ (okamžitý)
    const handleSortChange = (newSortBy: S) => {
        const newSortOrder: "asc" | "desc" =
            inputFilters.sortBy === newSortBy && inputFilters.sortOrder === "desc"
                ? "asc"
                : "desc";

        const newFilters = {
            ...inputFilters,
            sortBy: newSortBy,
            sortOrder: newSortOrder,
        };
        setInputFilters(newFilters);
        setSearchParams(cleanFilters(newFilters));
    };

    // Handler pro RESET (okamžitý)
    const handleResetFilters = () => {
        setInputFilters(initialFilterState);
        setSearchParams(cleanFilters(initialFilterState));
    };

    return {
        inputFilters,
        queryFilters,
        handleTextChange,
        handleSelectChange,
        handleSortChange,
        handleResetFilters,
    };
}