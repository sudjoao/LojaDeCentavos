import { IProduct } from "../../pages/products";
import { ProductCardContainer, ProductImage, ProductPrice, ProductPriceBadge, ProductTitle } from "./styles";


export default function ProductCard(product: IProduct){
    const getPrice = () => {
        let price = product.price;
        while(price > 1){
            price/=10;
        }
        return price.toFixed(2);
    }
    return(
        <ProductCardContainer>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductImage src={product.image}/>
            <ProductPriceBadge>
                <ProductPrice>${getPrice()}</ProductPrice>
            </ProductPriceBadge>
        </ProductCardContainer>
    )
}