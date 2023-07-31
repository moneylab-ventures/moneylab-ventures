/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
const timeline = [
  {
    name: "Signed Contracts",
    description:
      "Once contracts are signed from both sides, we will have an intro call where we will discuss if clients have an existing LLC. If they don’t, we will get them an LLC which takes 1-2 weeks to receive. If they do, we move on.",
    title: "Intro Call",
    serialnumber: "1",
  },
  {
    name: "DUNS number",
    description:
      "The next step would be to get them a DUNS number which takes 5-7 days. ",
    title: "DUNS Number",
    serialnumber: "2",
  },
  {
    name: "Information for the store",
    description:
      "Then we will have clients fill out a pre-Walmart google form requiring information we would need to apply for a store.",
    title: "Google Form ",
    serialnumber: "3",
  },
  {
    name: "Walmart Call",
    description:
      "After, we set a call with our Walmart team and wait to hear back from Walmart. ",
    title: "Walmart Team",
    serialnumber: "4",
  },
  {
    name: "Assigning a team",
    description:
      "Once approved, we complete the necessary checklist on Walmart and launch client store. We will assign a team and get it started",
    title: "Get Started",
    serialnumber: "5",
  },
];

export default function About() {
  return (
    <div className="bg-gray-900">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">MoneyLab Ventures</span>
              <img
                className="h-24"
                src="/moneylab_lightlogo2.png"
                alt="MoneyLab Ventures"
              />
            </a>
          </div>
        </nav>
      </header>

      <main className="relative isolate">
        {/* Background */}
        <div
          className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-white-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] relative isolate overflow-hidden bg-gray-900 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:col-span-2 xl:col-auto">
                Who we are?
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-400">
                  E-Commerce business are the modern day real estate. It is a
                  long term investment that comes with a definite return. Over
                  the last few years especially with the pandemic, e-commerce
                  sales have spiked in numbers and are at an all time high. It
                  will continue to grow.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-400">
                  Starting up a business requires a lot of thought and mapping.
                  What should I sell? Where do I sell? Who will I supply from?
                  Well, this is why we have a team of experienced professional
                  e-commerce sellers who have been selling on Amazon for years.
                  Our team will work on your store to create a profitable,
                  sustainable e-commerce business for you. Our team of experts
                  are constantly implementing new strategies to be ahead of the
                  e-com world.
                </p>
              </div>
              <img
                src="/about.png"
                alt=""
                className="aspect-[6/5] w-full max-w-lg rounded-xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-gray-900 sm:h-32" />
        </div>

        <div className="pb-24">
          <div className="mx-auto px-8 max-w-7xl text-base leading-7 text-white">
            <h1 className="mt-2 text-lg font-bold tracking-tight text-white sm:text-3xl">
              Our Goals
            </h1>
            <p className="mt-2 text-xl leading-8 text-gray-400">
              Our goal is to provide the best service to our clients so they are
              allowed to make hands-off money to be able to do whatever they
              want, whenever they want. It’s the freedom we want to be able to
              provide our client through their investment. Our goal is to
              provide a passive source of income for others so they can enjoy
              the perks of some hands off income.
            </p>
          </div>
          <div className="mx-auto pt-10 px-8 max-w-7xl text-base leading-7 text-white">
            <h1 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-3xl">
              Our Values
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-400">
              Our creative work process allows us to create quality results. Our
              communication and work ethic allows us to be transparent with our
              clients and help create a sustainable e-commerce business for
              them. We believe that if we back our clients and work as a team we
              can create a large impact together.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
