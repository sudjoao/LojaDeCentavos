import { useNavigate } from "react-router-dom";
import { IProduct } from "../../pages/products";
import { ProductCardContainer, ProductImage, ProductPrice, ProductPriceBadge, ProductTitle } from "./styles";


export default function ProductCard(product: IProduct){
    const navigate = useNavigate();
    const getPrice = () => {
        let price = product.price;
        while(price > 1){
            price/=10;
        }
        return price.toFixed(2);
    }
    const navigateToProductDetail = () => {
        navigate(`/product/${product.id}`)
    }
    return(
        <ProductCardContainer onClick={navigateToProductDetail}>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductImage src={product.image}/>
            <ProductPriceBadge>
                <ProductPrice>${getPrice()}</ProductPrice>
            </ProductPriceBadge>
        </ProductCardContainer>
    )
}