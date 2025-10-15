// v souboru src/hooks/useLogin.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useNotification } from '../context/NotificationProvider';
import { loginUser, } from '../pages/Login/api'; // Uprav si cesty
import type { ApiErrorData } from '../pages/Login/api';
import { AxiosError } from "../config.ts";

interface FormErrors {
    username?: boolean;
    password?: boolean;
}

// Náš nový hook, který vrací vše, co komponenta potřebuje
export function useLogin() {
    const [errors, setErrors] = useState<FormErrors>({});
    const { showNotification } = useNotification();
    const navigate = useNavigate();

    const { mutate, isPending } = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            if (data.valid) {
                localStorage.setItem("authToken", data.token);
                navigate("/orders");
                showNotification({ status: "success", message: data.message });
            } else {
                showNotification({ status: "error", message: data.message });
                setErrors({ username: true, password: true });
            }
        },
        onError: (error: AxiosError<ApiErrorData>) => {
            const message = error.response?.data?.message || "Špatné jméno nebo heslo";

            const credentialsErr = error.response?.data?.credentials_err;

            if (credentialsErr) {
                setErrors({ username: true, password: true });
            }
            showNotification({ status: "error", message });
        }
    });

    return { login: mutate, isPending, errors, setErrors };
}