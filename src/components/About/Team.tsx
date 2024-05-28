import Image from "next/image";

const Team = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="py-5">
        <h1 className="text-center my-5 text-4xl font-bold text-black dark:text-white sm:text-2xl lg:text-4xl xl:text-4xl">Our Team</h1>
        <p className=" text-center text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
          Meet the dedicated team behind our success.
        </p>
      </div>
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/othmane.png"
                alt="team image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/othmane.png"
                alt="team image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-4">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Othmane Elourazazi
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Othmane Elourzazi - Chief Executive Officer (CEO)
As our Chief Executive Officer, Othmane Elourzazi leads with a clear vision and unwavering commitment to excellence. With a strong background in business management and a deep understanding of market dynamics.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap items-center">
          <div className=" mt-10 w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/younes.png"
                alt="team image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/younes.png"
                alt="team image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-4">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                 YOUNES HIDAOUI 
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Younes Hidaoui  -  Chief Technology Officer (CTO)  ,
                 Our Chief Technology Officer, brings a wealth of technical expertise and a passion for innovation to our team. With a background in software engineering and years of experience leading tech projects, Younes is the driving force behind our technological advancements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
