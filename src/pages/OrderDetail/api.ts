import { adminAPI } from "../../config";
import type { ApiResponse, OrderDetail } from "./types";

async function fetchOrder(id: string) {
  try {
    const response = await adminAPI.get<ApiResponse<OrderDetail>>(
      `/admin/orders/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export { fetchOrder };
