import OurProductsItem from "../components/OurProductsItem";
import { products } from "../constants";

const OurProducts = () => {
  return (
    <section className="mb-40">
      <h2 className="uppercase font-bold text-2xl border-b-2 mb-5 pb-1">
        Our Products
      </h2>
      <div className="overflow-hidden relative">
        <ul className="flex gap-4 animate-infinite-scroll">
          {products.map((el) => {
            return <OurProductsItem key={el.id} {...el} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default OurProducts;
