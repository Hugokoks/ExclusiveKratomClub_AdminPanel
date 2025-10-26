import FilterNav from "../../components/FilterNav/FilterNav";

const productFilterGrid = "0.6fr 1fr 1.5fr 0.8fr 1fr 0.8fr 1fr 0.4fr";
export default function ProductsNav() {
    return (
        <FilterNav onFilterReset={() => { }} gridTemplateColumns={productFilterGrid}>



        </FilterNav>
    );
}