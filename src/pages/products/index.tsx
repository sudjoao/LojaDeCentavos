import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import ProductCard from "../../components/product_card";
import {api} from "../../services/api";
import { ProductPageContainer, ProductListTitle, ProductListWrap, LoadingIndicator } from "./styles";

export interface IProduct {
    id: number;
    category: string;
    image: string;
    price: number;
    title: string;
}

export default function ProductPage(){
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoanding, setIsLoading] = useState(true);

    const fetchProducts = async () => {
        let response = await api.get("products");
        setProducts(response.data);
        setIsLoading(false);
    }
    useEffect(()=>{
        fetchProducts();
    },[])
    return(
        <ProductPageContainer>
            <ProductListTitle>Produtos</ProductListTitle>
            {
            isLoanding?
            <LoadingIndicator /> :
            <ProductListWrap>
                {products.map(product => (
                    <ProductCard {...product} key={product.id} />
                    ))}
            </ProductListWrap>
            }
        </ProductPageContainer>
    );
}