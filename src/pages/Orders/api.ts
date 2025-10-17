import { adminAPI } from "../../config";
import type { FilterData } from "./Orders";

export async function fetchOrders(filters: FilterData | null) {
  try {
    const response = await adminAPI.get("/admin/orders", {
      params: filters,
    });
    return response.data;
  } catch (error) {
    console.error("Chyba při načítání objednávek:", error);

    throw error;
  }
}
