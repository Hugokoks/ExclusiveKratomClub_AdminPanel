import { adminAPI } from "../config";
import { AxiosError } from "../config";




export interface SuccessResponse<ResponseType> {
    message: string;
    data: ResponseType;
    status: string;
    valid: boolean;
}


export async function fetchFilter<
    filterType extends Record<string, any>,
    ResponseType>(endPoint: string, filters: filterType | null, dataEmpty: ResponseType) {
    try {
        const response = await adminAPI.get<SuccessResponse<ResponseType>>(endPoint, {
            params: filters,
        });
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response?.status === 404) {
            return {
                message: error?.response?.data?.message,
                data: dataEmpty,
                status: "error",
                valid: false,
            } as SuccessResponse<ResponseType>;
        }

        console.error("Chyba při načítání objednávek:", error);
        throw error;
    }
}