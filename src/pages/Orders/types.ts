export type SortableColumn = "date" | "price" | "itemCount";
export type OrderStatus = "completed" | "canceled" | "pending";

export interface FilterData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  paymentMethod: string;
  deliveryMethod: string;
  status: string;
  sortBy: SortableColumn;
  sortOrder: "asc" | "desc";
}
export interface Order {
  id: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  email: string;
  deliveryAddress: string;
  paymentMethod: string;
  deliveryMethod: string;
  totalPrice: number;
  itemCount: number;
  status: OrderStatus;
}
export interface SuccessResponse {
  message: string;
  orders: Order[];
  status: string;
  valid: boolean;
}
export interface PatchResponse {
  message: string;
  valid: boolean;
}

export interface PatchPayload {
  id: string | undefined;
  status: OrderStatus;
}

const initFilterData: FilterData = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  paymentMethod: "",
  deliveryMethod: "",
  status: "",
  sortBy: "date",
  sortOrder: "desc",
};

export { initFilterData };
