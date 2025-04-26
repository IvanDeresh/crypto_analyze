import "@fortawesome/fontawesome-free/css/all.min.css";
import { OurProductsProps } from "../types/props";

const OurProductsItem = ({ name, icon, category }: OurProductsProps) => {
  return (
    <li className="relative min-w-[20rem] h-[10rem] flex justify-center items-center rounded-2xl bg-gray-900">
      <div>
        <i className={`${icon} text-[5rem]`}></i>
      </div>
      <p className="absolute bottom-3 font-bold">{name}</p>
      <p className="absolute top-1 right-2 text-transparent bg-gradient-to-br from-purple-500 via-[#581acc] to-[#2522e6] bg-clip-text">
        {category}
      </p>
    </li>
  );
};

export default OurProductsItem;
