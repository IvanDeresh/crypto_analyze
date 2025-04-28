import { newsData } from "../../constants";

const News = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-8">Latest News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((newsItem) => (
          <div
            key={newsItem.id}
            className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between"
          >
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-white">
              {newsItem.title}
            </h3>
            <p className="text-gray-400 mt-2">{newsItem.description}</p>
            <p className="text-gray-500 mt-4 text-sm">{newsItem.date}</p>
            <div
              className={`mt-2 p-2 text-sm font-semibold rounded-md ${
                newsItem.category === "stocks"
                  ? "bg-blue-500 text-white"
                  : newsItem.category === "cryptocurrency"
                  ? "bg-yellow-500 text-black"
                  : newsItem.category === "precious metals"
                  ? "bg-green-500 text-white"
                  : "bg-gray-600 text-white"
              }`}
            >
              {newsItem.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
