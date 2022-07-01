import { Typography } from "@mui/material";
import { ProductMetarWrapper } from ".";


export default function ProductMeta({product, matches }) {
    return (
        <ProductMetarWrapper>

            <Typography variant={matches ? 'h6' : 'h5'} lineHeight={2} >
            {product.name}
            </Typography>
            <Typography variant={matches ? 'caption' : 'body1'}>
                ${product.price}
            </Typography>
        </ProductMetarWrapper>
    )
}