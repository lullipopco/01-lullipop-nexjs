import { getProductsInCollection } from "../lib/Shopify";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";



export default function Home({ products }) {
  

    return (
        <div className="">
        <Hero />
        <ProductList products={products} />
        
        </div>
    )
}

export async function getStaticProps() {
    const products = await getProductsInCollection()

    return {
        props: { products }, //will be passed to the page componet as props
    }
}