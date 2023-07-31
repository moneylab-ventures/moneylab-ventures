"use client";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

const frequencies = [{ value: "onetime", label: "One Time", priceSuffix: "" }];

const tiers = [
  {
    name: "50/50 Profit Split Offer",
    id: "tier-enterprise",
    href: "#",
    price: { onetime: "$20,000" },
    features: [
      "50/50 Split ",
      "24/7 Customer Service",
      "US Based Support",
      "User Permissions to view store progress",
    ],
  },
  {
    name: "60/40 Profit Split Offer",
    id: "tier-startup",
    href: "#",
    price: { onetime: "$25,000" },
    features: [
      "60/40 profit split",
      "24/7 Customer Service",
      "US Based Support",
      "User Permissions to view store progress",
    ],
  },
  {
    name: "70/30 Profit Split Offer",
    id: "tier-freelancer",
    href: "#",
    price: { onetime: "$35,000" },
    features: [
      "70/30 Split",
      "24/7 Customer Service",
      "US Based Support",
      "Hands on access to the store and progress",
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function OffersSection() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div id="package" className="bg-gray-900 py-8 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Offers
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Offers to help in automation
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Unlock unbeatable offers tailored to your needs. Our packages combine
          cutting-edge software, a world-class team, and mutual dedication to
          help you discover what works best for your success.
        </p>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "bg-white/5 ring-2 ring-indigo-500"
                  : "ring-1 ring-white/10",
                "rounded-3xl p-8 xl:p-10"
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className="text-lg font-semibold leading-8 text-white"
                >
                  {tier.name}
                </h3>
              </div>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  {tier.price[frequency.value]}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-300">
                  {frequency.priceSuffix}
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className="shadow-sm hover:bg-indigo-500 bg-white/10 text-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6"
              >
                Get Started
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-white"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
