import FeedBackItem from "../components/FeedBackItem";
import { feedbacks } from "../constants";

const FeedBacks = () => {
  return (
    <section className="mb-40">
      <h2 className="uppercase font-bold text-2xl border-b-2 mb-5 pb-1">
        Feedbacks
      </h2>
      <ul className="flex gap-4 justify-between">
        {feedbacks.map((el) => {
          return <FeedBackItem key={el.userId} {...el} />;
        })}
      </ul>
    </section>
  );
};

export default FeedBacks;
