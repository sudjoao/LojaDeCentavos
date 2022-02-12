import { useEffect, useState } from "react";
import ProductCard from "../../components/product_card";
import {api} from "../../services/api";
import { ProductPageContainer, ProductListTitle, ProductListWrap } from "./styles";

export interface IProduct {
    id: number;
    category: string;
    image: string;
    price: number;
    title: string;
}

export default function ProductPage(){
    const [products, setProducts] = useState<IProduct[]>([]);

    const fetchProducts = async () => {
        let response = await api.get("products");
        console.log(response.data);
        setProducts(response.data);
    }
    useEffect(()=>{
        fetchProducts();
    },[])
    return(
        <ProductPageContainer>
            <ProductListTitle>Produtos</ProductListTitle>
            <ProductListWrap>
                {products.map(product => (
                    <ProductCard {...product} key={product.id} />
                    ))}
            </ProductListWrap>
        </ProductPageContainer>
    );
}