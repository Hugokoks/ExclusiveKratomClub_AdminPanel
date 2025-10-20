import { useQueryClient, useMutation } from "@tanstack/react-query";
import type { PatchResponse } from "../pages/Orders/types";
import { orderStatusPatch } from "../pages/Orders/api";
import { useNotification } from "../context/NotificationProvider";



export default function usePatchOrder() {

    const { showNotification } = useNotification();
    const queryClient = useQueryClient();


    const { mutate, isPending, error, isError } = useMutation({

        mutationFn: orderStatusPatch,
        onSuccess: (data: PatchResponse) => {

            if (data.valid) {
                showNotification({ status: "ok", message: data.message })

                ////refreshne orders list
                queryClient.invalidateQueries({ queryKey: ['orders'] });
            }

        },
    })

    return { pathOrder: mutate, isPending, error, isError };

}