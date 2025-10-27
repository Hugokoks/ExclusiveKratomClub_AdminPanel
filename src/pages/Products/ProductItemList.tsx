import ProductItem from "./ProductItem";
import { useQuery } from "@tanstack/react-query";

export default function ProductItemList() {




    return (
        <div className="mt-3 flex flex-col gap-3">

            <ProductItem />

        </div>
    );
}