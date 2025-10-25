import { adminAPI, AxiosError } from "../../config";
import type {
  SuccessResponse,
  FilterData,
  PatchResponse,
  PatchPayload,
} from "./types";

export async function fetchOrders(filters: FilterData | null) {
  try {
    const response = await adminAPI.get<SuccessResponse>("/admin/orders", {
      params: filters,
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 404) {
      return {
        message: error?.response?.data?.message,
        orders: [],
        status: "error",
        valid: false,
      } as SuccessResponse;
    }

    console.error("Chyba při načítání objednávek:", error);
    throw error;
  }
}
export async function orderStatusPatch(payload: PatchPayload) {
  try {
    const response = await adminAPI.patch<PatchResponse>(
      "/admin/orders/patch",
      payload
    );
    return response.data;
  } catch (error) {
    console.error("API call failed:", error);

    throw error;
  }
}
