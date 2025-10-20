import { useEffect } from "react";
import { useNotification } from "../context/NotificationProvider";
import { AxiosError } from "axios"; // Importujeme si typ pro chybu z Axiosu


interface ApiErrorData {
    message: string;

}


interface NotifyOnErrorProps {
    isError: boolean;

    error: Error | AxiosError<ApiErrorData> | null;
}

export default function useNotifyOnError({ isError, error }: NotifyOnErrorProps) {
    const { showNotification } = useNotification();

    useEffect(() => {
        if (isError && error) {
            let displayMessage = "Došlo k neznámé chybě.";

            if (error instanceof AxiosError && error.response?.data?.message) {

                displayMessage = error.response.data.message;
            } else {

                displayMessage = error.message;
            }

            showNotification({
                status: "error",
                message: displayMessage,
            });
        }
    }, [error]);
}
