import Link from "next/link";
import { useRouter } from "next/router";
import { useProduct, useAuth } from "@/hooks";
import Image from "next/image"; // only use if we know the image is hosted on the same domain
import MainLayout from "@/layouts/mainLayout";
import { useEffect, useState } from "react";

export default function ProductDetail() {
    useAuth();
    const router = useRouter();
    //const { id } = useParams(); // React Router but on Next.js we use the useRouter hook
    const { id } = router.query;
    const { product } = useProduct(id);

    return (
        <MainLayout>
            <main className="flex flex-col gap-4 p-4 justify-center items-center">
                <header className="text-left w-full">
                    <Link
                        className="cursor-pointer hover:text-cyan-500"
                        href={`/products/#product-${id}`}
                    >
                        👈 Regresar
                    </Link>
                </header>
                <h1 className="text-2xl font-bold text-center">{product.title}</h1>
                <img src={product.thumbnail} alt={product.title} className="size-48" />
                <p className="text-cyan-800 text-xl">$ {product.price}</p>
                <p className="max-w-prose">{product.description}</p>
            </main>
        </MainLayout>
    );
}

