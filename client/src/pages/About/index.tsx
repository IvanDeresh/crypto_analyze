const About = () => {
  return (
    <section className="min-h-screen h-auto justify-center grid grid-cols-1 text-white md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
      <div className="flex flex-col justify-center items-start p-6 bg-gray-900 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-purple-500 via-[#581acc] to-[#2522e6] bg-clip-text mb-4 text-transparent">
          About Our Platform
        </h1>
        <p className="text-lg text-gray-600">
          Welcome to our platform, where we provide in-depth analysis and
          tailored investment advice. Whether you are new to investing or an
          experienced trader, we offer insights and strategies for building a
          robust portfolio across various asset classes, including stocks,
          precious metals, and cryptocurrencies.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          Our mission is to help you make informed decisions and navigate the
          complexities of the market to achieve your financial goals.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="card p-6 bg-gray-900 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold bg-gradient-to-br from-purple-500 via-[#581acc] to-[#2522e6] bg-clip-text mb-2 text-transparent">
            Stocks
          </h2>
          <p className="text-gray-600">
            Stay updated with the latest stock market trends and get
            personalized advice on managing your equity portfolio. We analyze
            market movements, identify growth opportunities, and help you build
            a strategy to maximize returns.
          </p>
        </div>
        <div className="card p-6 bg-gray-900 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold bg-gradient-to-br from-purple-500 via-[#581acc] to-[#2522e6] bg-clip-text mb-2 text-transparent">
            Precious Metals
          </h2>
          <p className="text-gray-600">
            Learn about the stability and long-term value of investing in gold,
            silver, and other precious metals. We provide insights into how to
            incorporate these assets into your portfolio to hedge against market
            volatility and inflation.
          </p>
        </div>
        <div className="card p-6 bg-gray-900 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold bg-gradient-to-br from-purple-500 via-[#581acc] to-[#2522e6] bg-clip-text mb-2 text-transparent">
            Cryptocurrency
          </h2>
          <p className="text-gray-600">
            Explore the world of digital assets and understand how to safely
            invest and diversify with cryptocurrencies. We cover the latest
            trends, best practices for securing your investments, and how to
            manage risks in this rapidly evolving space.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start p-6 bg-gray-900 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold bg-gradient-to-br from-purple-500 via-[#581acc] to-[#2522e6] bg-clip-text mb-4 text-transparent">
          Our Expertise
        </h2>
        <p className="text-lg text-gray-600">
          Our team of experienced analysts and financial advisors is dedicated
          to helping you grow your wealth by providing expert insights and
          data-driven strategies tailored to your investment profile.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          Whether you're focused on short-term gains or long-term growth, we
          offer the tools, knowledge, and support to help you make the best
          decisions for your financial future.
        </p>
      </div>
    </section>
  );
};

export default About;
