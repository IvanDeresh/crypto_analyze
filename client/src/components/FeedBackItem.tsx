import { FeedBackItemProps } from "../types/props";
import { renderStars } from "../utils/helpers/renderStars";

const FeedBackItem = ({ userName, rating, text }: FeedBackItemProps) => {
  return (
    <li className="min-w-[calc(33.333%-1rem)] flex justify-center items-center rounded-2xl p-10 bg-gray-900 flex-col">
      <p className="text-white">"{text}"</p>
      <div className="text-white mt-4 flex justify-between w-full">
        <span className="font-bold">{userName}</span>
        <div className="flex ml-2">{renderStars(rating)}</div>
      </div>
    </li>
  );
};

export default FeedBackItem;
