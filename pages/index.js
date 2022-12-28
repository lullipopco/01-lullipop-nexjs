import { getProductsInCollection } from "../lib/Shopify";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";
import Head from "next/head";


export default function Home({ products }) {
  

    return (
        <div className="">
        <Head>
        <title>Lullipop & Co.</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name="description" content="" />
        <meta property="og:title" content="Lullipop & Co Women's Lingerie and Apparel" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lullipop.com" />
        <meta property="og:image" content="https://www.lullipop.com/share.png" />
        <meta property="og:description"
          content="Designed to make you look and feel sexy, Lullipop Underwear creates comfortable underwear, always with you in mind. Shop Lullipop now. Comfort, Confidence, and Care Made Sexy." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Lullipop & Co Women's Lingerie and Apparel" />
        <meta name="author" content="Lullipop & Co."></meta>
      </Head>
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