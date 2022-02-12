import { IProduct } from "../../pages/products";
import { ProductCardContainer, ProductImage, ProductPrice, ProductTitle } from "./styles";


export default function ProductCard(product: IProduct){
    const getPrice = () => {
        return (product.price/100).toFixed(2);
    }
    return(
        <ProductCardContainer>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductImage src={product.image}/>
            <ProductPrice>${getPrice()}</ProductPrice>
        </ProductCardContainer>
    )
}