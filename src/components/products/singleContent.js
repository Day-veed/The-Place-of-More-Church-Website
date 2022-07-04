import { Product, ProductImage } from ".";
import ProductMeta from "./ProductMeta"; b


export default function singleProducts({product, matches}) {

    return(
        <Product>
            <ProductImage src={ product.image} />
            <ProductMeta product={product} matches={matches} />
        </Product>
    )
}