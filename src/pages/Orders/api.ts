import { adminAPI } from "../../config";
import type {
  PatchResponse,
  PatchPayload,
} from "./types";


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
