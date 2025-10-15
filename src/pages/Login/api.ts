// v souboru src/utils/api.ts (nebo kde máš fetchOrders)
import { cliAPI } from "../../config";


// Definujeme si typy pro přehlednost
export interface BaseAPIResponse {
    message: string;
    valid: boolean;

}
export interface SuccessLoginResponse extends BaseAPIResponse {
    token: string;
    valid: true;


}
export interface ApiErrorData extends BaseAPIResponse {
    credentials_err?: boolean;
    status?: string;
    valid: false
}

export interface LoginPayload {
    username: string;
    password: string;
}

export async function loginUser(payload: LoginPayload): Promise<SuccessLoginResponse | ApiErrorData> {
    try {
        const response = await cliAPI.post<SuccessLoginResponse | ApiErrorData>("/admin/auth/login", payload);

        return response.data;

    } catch (error) {
        console.error("API call failed:", error);

        throw error;
    }
}