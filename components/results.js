/* eslint-disable @next/next/no-img-element */
"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const testimonials = [
  {
    image: "/MLCaseStudy(2).webp",
    author: {
      name: (
        <ul>
          <li>Has sold 264 units so far</li>
          <li>$10,580 Nov 8, 2022</li>
          <li>New store has done $20,400</li>
        </ul>
      ),
    },
  },
  {
    image: "/MLCaseStudy(3).webp",
    author: {
      name: (
        <ul>
          <li>Has sold 264 units so far</li>
          <li>$10,580 Nov 8, 2022</li>
          <li>New store has done $20,400</li>
        </ul>
      ),
    },
  },
  {
    image: "/MLCaseStudy(4).webp",
    author: {
      name: (
        <ul>
          <li>Has sold 264 units so far</li>
          <li>$10,580 Nov 8, 2022</li>
          <li>New store has done $20,400</li>
        </ul>
      ),
    },
  },
  {
    image: "/MLCaseStudy(5).webp",
    author: {
      name: (
        <ul>
          <li>Has sold 264 units so far</li>
          <li>$10,580 Nov 8, 2022</li>
          <li>New store has done $20,400</li>
        </ul>
      ),
    },
  },
];

const posts = [
  {
    id: 1,
    video: "/testimonial2.mp4",
  },
  {
    id: 2,
    video: "/testimonial3.mp4",
  },
  {
    id: 3,
    video: "/testimonial1.mp4",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ResultsSection() {
  return (
    <div id="results" className="relative isolate bg-gray-900 sm:pb-24 pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-400">
            Accomplishments
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            We have worked with hundreads of amazing people
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 grid-rows-1 gap-4 place-items-center text-md leading-6 text-gray-900 sm:grid-cols-2 xl:grid-flow-col xl:grid-cols-4">
          {testimonials.map((testimonial, i) => (
            <figure
              key={testimonial.author}
              className="rounded-2xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5 w-full h-3/4"
            >
              <figcaption className="mt-2 mb-8 flex items-center gap-x-4">
                <div>
                  <div className="font-semibold text-center text-black">
                    {testimonial.author.name}
                  </div>
                </div>
              </figcaption>
              <Image
                width={100}
                height={100}
                className="h-3/4 w-full object-cover"
                src={testimonial.image}
                alt=""
              />
            </figure>
          ))}
        </div>
      </div>
      <div id="testimonials" className="py-24 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Testimonials
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-200">
              Don&apos;t listen to us, listen to them!
            </p>
          </div>

          <Carousel
            autoPlay
            infiniteLoop
            centerMode
            className="max-w-xl mx-auto"
          >
            {posts.map((post) => (
              <article key={post.id}>
                <div className="relative w-[80%] mx-auto mt-10 mb-12">
                  <video
                    controls
                    src={post.video}
                    alt=""
                    loop
                    // autoPlay
                    className="aspect-auto sm:aspect-[16/9] w-[100%] rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[2/2]"
                  />
                </div>
              </article>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
