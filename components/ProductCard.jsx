import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import Link from "next/link"; //Reemplazamos el Link de react-router-dom por el de next/link

export default function ProductCard({ id, title, price, thumbnail }) {
    const ref = useRef(null) //This is a reference to the article element that will be used to scroll into view when the product is selected
    const [hash, setHash] = useState(""); //This state will store the current hash value
    const elementId = `product-${id}`

    useEffect(() => {
        const hashId = window.location.hash.replace("#", "");
        setHash(window.location.hash)

        if (hashId === elementId) {
            ref.current.scrollIntoView({ behavior: "smooth" })
        }
    }, []);

    return (
        <article
            ref={ref}
            id={`product-${id}`}
            className={clsx("flex flex-col items-center justify-center p-4 border border-white/10 rounded cursor-pointer gap-2",
                { "shadow-md shadow-cyan-600": hash === elementId }  // Changed hash to useState as no window is present if it renders on the server
            )}
        >
            <img src={thumbnail} alt={title} />
            <h2
                className="text-lg font-bold"
            >{title}</h2>
            <p
                className="text-cyan-800"
            >${price}</p>
            <Link
                className="bg-white text-black text-center w-full p-2 rounded"
                href={`/products/${id}`}
            >
                Ver detalle
            </Link>
        </article>
    )



}