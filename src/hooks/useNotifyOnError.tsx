import { useEffect } from "react";
import { useNotification } from "../context/NotificationProvider";


interface NotifyOnErrorProps {

    isError: boolean
    error: Error | null

}

export default function useNotifyOnError({ isError, error }: NotifyOnErrorProps) {
    const { showNotification } = useNotification();
    useEffect(() => {
        if (isError && error) {
            showNotification({
                status: "error",
                message: error.message,
            });
        }

    }, [error])
}