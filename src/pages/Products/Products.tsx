import ViewScreen from "../../components/ViewScreen/ViewScreen";
import ProductItemList from "./ProductItemList";
import ProductsNav from "./ProductsNav";

export default function Products() {
    return (
        <ViewScreen>

            <div className="flex flex-col px-5 py-0">
                <ProductsNav />
                <ProductItemList />
            </div>
        </ViewScreen>
    );
}