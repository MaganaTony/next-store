import ProductCard from "@/components/ProductCard";
import MainLayout from "@/layouts/mainLayout";
import { getAllProducts } from "@/utils/api";

export default function Static({ products }) {

    return (
        <MainLayout>
            <main className="p-4 flex flex-col gap-8">
                <h1 className="text-3xl font-bold text-center">Products</h1>
                <section className="grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4">
                    {products.map((product, idx) => {
                        return (
                            <ProductCard
                                key={`product-${idx}`}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                thumbnail={product.thumbnail}
                            />
                        );
                    })}
                </section>
            </main>
        </MainLayout>
    );
}

//server side rendering

export async function getServerSideProps() {
    console.log("getServerSideProps");
    const products = await getAllProducts();

    return {
        props: {
            products,
        },
    };
}

//static site generation

