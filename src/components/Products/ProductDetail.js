import React, { useEffect, useState } from "react";
import c9 from "@/assests/suryaprakash silk mills/SUPREMO/I1.jpg";
import Image from "next/image";
import { useRouter } from "next/router";
import { productCategories } from "@/utils/constants";
import BF1 from "@/assests/suryaprakash silk mills/BOMBAY FILAFIL/i1.jpg";
import BF2 from "@/assests/suryaprakash silk mills/BOMBAY FILAFIL/i2.jpg";
import Loading from "../loading/loading";
import Link from "next/link";
// import { GlassMagnifier } from "react-image-magnifiers";
const ProductDetail = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    categoryID: "1",
    image: BF1,
    title: "BOMBAY FILAFIL",
    // path: `/garments`,
    otherImages: [BF1, BF2],
    details: "2/80 Pc + 80/300 Dyed x 40pc white + 80/300 Dyed",
  });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    const { id } = router.query;
    if (id) {
      console.log(id);
      const products = productCategories.find((category) => {
        return category.categoryID == id;
      });
      console.log(products);
      setProduct(products);
      setActiveIndex(products.activeIndex);
      setLoading(false);
    }
  }, [router.query.id]);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="flex max-w-7xl max-md:flex-col p-4">
        <div className="flex flex-col lg: w-full h-full p-4">
          <div className="bg-slate-300 flex items-center  justify-center overflow-hidden rounded-md my-4">
            {/* <GlassMagnifier
              imageSrc="../../assests/suryaprakash silk mills/BOMBAY FILAFIL/i1.jpg"
              imageAlt="Example"
              largeImageSrc="../../assests/suryaprakash silk mills/BOMBAY FILAFIL/i1.jpg" // Optional
            /> */}
            <Image
              src={product?.otherImages[activeIndex] || product.image}
              className="bg-slate-300 h-[45vh] md:h-[75vh] w-[70%] mx-4 object-none rounded-md my-4"
              quality={100}
              style={{ objectFit: "fill" }}
              // className="group-hover:opacity-60 h-full object-cover object-center transition duration-500"
              // src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
              alt="Product Image"
            />
          </div>
          <div className="md:hidden flex space-x-4 h-full w-full">
            {product?.otherImages.map((img, idx) => (
              <div
                onClick={() => setActiveIndex(idx)}
                key={idx}
                // className="bg-slate-100 flex w-full h-full border rounded-md"
                className={`bg-slate-100 max-w-[30%] ${
                  activeIndex == idx && "border-2 border-accent"
                } flex w-full h-full border rounded-md p-2`}
              >
                <Image
                  src={img}
                  quality={75}
                  // className="group-hover:opacity-60 h-full object-cover object-center transition duration-500"
                  // src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
                  alt="sofa-2"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full h-full md:space-y-8 text-left p-6 justify-start items-start flex-col">
          <div className="max-md:hidden  flex space-x-4 h-[70%] w-full">
            {product?.otherImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`bg-slate-100 max-w-[30%] ${
                  activeIndex == idx && "border-2 border-accent"
                } flex w-full h-full border rounded-md p-2`}
              >
                <Image
                  src={img}
                  quality={75}
                  className="h-72 object-cover object-top"
                  // className="group-hover:opacity-60 h-full object-cover object-center transition duration-500"
                  // src="https://i.ibb.co/q79KfQr/pexels-pixabay-276583-removebg-preview-1.png"
                  alt="sofa-2"
                />
              </div>
            ))}
          </div>
          <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl border-b-4 border-accent">
            {product?.title || "BOMBAY FILAFIL"}
          </h2>

          <p className="text-gray-500">
            {product?.details ||
              "2/80 Pc + 80/300 Dyed x 40pc white + 80/300 Dyed"}
          </p>
          <div className="flex justify-start w-full py-4 space-x-4">
            <Link
              href={{
                pathname: "/contact-us",
                query: {
                  message: `I want to Know More About ${product?.title} Product`,
                },
              }}
            >
              <button
                type="button"
                className="h-14 px-6 py-2 font-semibold rounded-xl bg-gray-700 hover:bg-gray-500 text-white"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
