import { Product, ProductImage } from "../../styles/Products";
import ProductMeta from "./ProductMeta"; 


export default function singleProduct({product, matches}) {

    return(
        <Product>
            <ProductImage src={ product.image} />
            <ProductMeta product={product} matches={matches} />
        </Product>
    )
}