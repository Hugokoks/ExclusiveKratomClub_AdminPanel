import { adminAPI } from "../../config";
import type { SuccessResponse, FilterData, PatchResponse, PatchPayload } from "./types";

export async function fetchOrders(filters: FilterData | null) {
    try {
        const response = await adminAPI.get<SuccessResponse>("/admin/orders", {
            params: filters,
        });
        return response.data;
    } catch (error) {
        console.error("Chyba při načítání objednávek:", error);
        throw error;
    }
}
export async function orderStatusPatch(payload: PatchPayload): Promise<PatchResponse> {

    try {
        const response = await adminAPI.patch<PatchResponse>("/admin/orders/patch",
            payload
        );
        return response.data
    }
    catch (error) {
        console.error("API call failed:", error);

        throw error;
    }
}