// src/components/QueryList/QueryList.tsx

import React, { memo, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchFilter } from "../../utils/fetchFilter"; // Tvůj generický fetcher
import Loading from "../Loading/Loading";
import useNotifyOnError from "../../hooks/useNotifyOnError";
import { useNotification } from "../../context/NotificationProvider";
import type { SuccessResponse } from "../../utils/fetchFilter"; // Typ z tvé API



type ItemWithId = {
    id: string | number;
    [key: string]: any;
};

interface QueryListProps<
    FilterType extends Record<string, any>,
    DataType extends ItemWithId  ///data type pro itemy co bude vracet fetch 
> {
    filters: FilterType | null;
    queryKey: string;
    endpoint: string;
    notFoundMessage: string;
    renderItem: (item: DataType) => React.ReactNode; ////obecna funkce na render itemu 
}


const QueryListComponent = <
    FilterType extends Record<string, any>,
    DataType extends ItemWithId
>({
    filters,
    queryKey,
    endpoint,
    notFoundMessage,
    renderItem,
}: QueryListProps<FilterType, DataType>) => {

    const { showNotification } = useNotification();
    const reactQueryKey = [queryKey, filters];
    const { data, isLoading, isError, error } = useQuery<SuccessResponse<DataType[]>, Error>({
        queryKey: reactQueryKey,
        queryFn: () => fetchFilter<FilterType, DataType[]>(endpoint, filters, []),
        retry: 1,
    });

    ////notifikace erroru pro obecnou chyby
    useNotifyOnError({ isError, error });


    /////data z fetche 
    const items = data?.data ?? [];
    const responseStatus = data?.status;
    const responseMessage = data?.message;
    const responseValid = data?.valid;

    /////notifikace erroru pro 404
    useEffect(() => {
        if (responseValid === false) {
            showNotification({
                status: responseStatus,
                message: responseMessage,
            });
        }
    }, [data]);

    ////loading stav
    if (isLoading) {
        return (
            <div className="mt-50">
                <Loading />
            </div>
        );
    }

    ////vykresli vysledek po fetchy
    return (
        <div className="mt-3 flex flex-col gap-3">
            {items.length === 0 ? (
                <div>
                    {notFoundMessage}
                </div>
            ) : (

                items.map((item: DataType) => (
                    renderItem(item)
                ))
            )}
        </div>
    );
};


// 3. Exportujeme MEMOIZOVANOU verzi
export const QueryList = memo(QueryListComponent) as <
    FilterType extends Record<string, any>,
    DataType extends ItemWithId
>(
    props: QueryListProps<FilterType, DataType>
) => React.ReactElement;