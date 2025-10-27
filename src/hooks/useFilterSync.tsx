// src/hooks/useFilterSync.ts (UPRAVENO)

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

interface SortableState<S extends string> {
    sortBy: S;
    sortOrder: "asc" | "desc";
}


const cleanFiltersForURL = <T extends Record<string, any>>(
    currentFilters: T,
    defaultFilters: T
): Record<string, string> => {

    const cleaned: Record<string, string> = {};

    (Object.keys(currentFilters) as Array<keyof T>).forEach((key) => {
        const currentValue = currentFilters[key];

        if (currentValue === "") {
            return;
        }

        if (defaultFilters.hasOwnProperty(key) && currentValue === defaultFilters[key]) {
            return;
        }

        if (currentValue !== null && currentValue !== undefined) {
            cleaned[key as string] = String(currentValue);
        }
    });

    return cleaned;
};


export function useFilterSync<
    T extends SortableState<S>,
    S extends string
>(
    initialFilterState: T,
    buildFiltersFromParams: (params: URLSearchParams) => T
) {
    const [searchParams, setSearchParams] = useSearchParams();
    const queryFilters = buildFiltersFromParams(searchParams);
    const [inputFilters, setInputFilters] = useState<T>(queryFilters);

    useEffect(() => {
        setInputFilters(buildFiltersFromParams(searchParams));
    }, [searchParams, buildFiltersFromParams]);

    useEffect(() => {
        const { sortBy: iSort, sortOrder: iOrder, ...inputSearchFilters } = inputFilters;
        const { sortBy: qSort, sortOrder: qOrder, ...querySearchFilters } = queryFilters;

        if (JSON.stringify(inputSearchFilters) !== JSON.stringify(querySearchFilters)) {
            const debounceTimer = setTimeout(() => {
                // Použije novou funkci a porovná s initialFilterState
                setSearchParams(cleanFiltersForURL(inputFilters, initialFilterState));
            }, 500);

            return () => clearTimeout(debounceTimer);
        }
    }, [inputFilters, queryFilters, initialFilterState, setSearchParams]);

    const handleTextChange = (name: keyof T, value: string) => {
        setInputFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    const handleSelectChange = (name: keyof T, value: string) => {
        const newFilters = { ...inputFilters, [name]: value };
        setInputFilters(newFilters);
        setSearchParams(cleanFiltersForURL(newFilters, initialFilterState));
    };

    const handleSortChange = (newSortBy: S) => {
        const newSortOrder: "asc" | "desc" =
            inputFilters.sortBy === newSortBy && inputFilters.sortOrder === "desc"
                ? "asc"
                : "desc";
        const newFilters = { ...inputFilters, sortBy: newSortBy, sortOrder: newSortOrder };
        setInputFilters(newFilters);
        setSearchParams(cleanFiltersForURL(newFilters, initialFilterState));
    };

    const handleResetFilters = () => {
        setInputFilters(initialFilterState);
        setSearchParams(cleanFiltersForURL(initialFilterState, initialFilterState));
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