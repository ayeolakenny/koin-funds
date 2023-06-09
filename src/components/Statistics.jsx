export const Statistics = () => (
  <section className="text-white body-font statistics-bg bg-gradient-to-r from-[#1f2658] to-[#272e5d]">
    <div className="container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
          Statistics So Far
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Historically, our crowdfunding campaigns have achieved an average
          success rate of 85%, helping our clients raise over $1 million in
          funding collectively.
        </p>
      </div>
      <div className="flex flex-wrap -m-4 text-center">
        <div className="p-4 sm:w-1/4 w-1/2">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
            0
          </h2>
          <p className="leading-relaxed">Projects</p>
        </div>
        <div className="p-4 sm:w-1/4 w-1/2">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
            0
          </h2>
          <p className="leading-relaxed">Investors</p>
        </div>
        <div className="p-4 sm:w-1/4 w-1/2">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
            0eth
          </h2>
          <p className="leading-relaxed">Payouts</p>
        </div>
        <div className="p-4 sm:w-1/4 w-1/2">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
            0
          </h2>
          <p className="leading-relaxed">Ongoing</p>
        </div>
      </div>
    </div>
  </section>
);
