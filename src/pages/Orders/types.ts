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

    status: "ok";
    message: string;
    orders: Order[];

}
export interface PatchResponse {
    status: string;
    message: string;
    valid: boolean;
}

export interface PatchPayload {

    id: string;
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



export { initFilterData }