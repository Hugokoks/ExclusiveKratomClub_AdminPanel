export interface OrderItemDetail {
  productName: string;
  variantLabel: string;
  imageSrc: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}

export interface OrderDetail {
  id: number;
  ekcId: string;
  status: string;
  createdAt: string; // Můžeš zvážit `Date`, pokud to budeš hned parsovat
  customerFirstName: string;
  customerLastName: string;
  customerEmail: string;
  customerPhone: string;
  deliveryAddress: string;
  paymentMethod: string;
  deliveryMethod: string;
  discountCzk: number;
  shippingCzk: number;
  subtotalCzk: number;
  paymentFeeCzk: number;
  totalCzk: number;
  weightGrams: number;
  note?: string; // Nechal jsem je optional, jak jsme se bavili
  items?: OrderItemDetail[]; // Nechal jsem je optional
}

// Taky si připrav tu obalující odpověď
export interface ApiResponse<T> {
  valid: boolean;
  message: string;
  order?: T; // Použiješ OrderDetail
}
