import { ProductDescription, ProductImage, ProductInfoContainer, ProductPrice, ProductTitle } from "./styles";
import { IProduct } from "../products";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { LoadingIndicator } from "../products/styles";
export default function ProductInfoScreen(){
    const [product, setProduct ] = useState<IProduct>();
    const params = useParams();
    const fetchProduct = async () => {
        const response = await api.get(`/products/${params.productId}`);
        setProduct(response.data);
        console.log(response.data);
    } 
    useEffect(()=>{
        fetchProduct();
    }, [])
    return(
        <ProductInfoContainer>
            {product?
            <>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductImage src={product.image}/>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductDescription>{product.category}</ProductDescription>
            </>
            :
            <LoadingIndicator />
            }
        </ProductInfoContainer>
    );
}