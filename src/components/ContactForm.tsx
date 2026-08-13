"use client";

import { FormEvent, useState } from "react";
import { services } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand/30 bg-brand-soft/40 p-8">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">Thank you</h2>
        <p className="mt-3 text-muted">
          Your message is ready to send. For the fastest response, email us at{" "}
          <a href="mailto:ceo@guidana.online" className="font-semibold text-brand">
            ceo@guidana.online
          </a>{" "}
          or call{" "}
          <a href="tel:+923046802911" className="font-semibold text-brand">
            +92 304 6802911
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-6 md:p-8">
      <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold sm:text-2xl">Send us the brief</h2>
      <p className="mt-2 text-sm text-muted">Fields marked with * are required.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm sm:col-span-1">
          <span className="mb-1.5 block font-medium">First name *</span>
          <input
            required
            name="firstName"
            className="w-full rounded-md border border-line bg-background px-3 py-2.5 outline-none ring-brand focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">Business email *</span>
          <input
            required
            type="email"
            name="email"
            className="w-full rounded-md border border-line bg-background px-3 py-2.5 outline-none ring-brand focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">Company name *</span>
          <input
            required
            name="company"
            className="w-full rounded-md border border-line bg-background px-3 py-2.5 outline-none ring-brand focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium">Phone</span>
          <input
            name="phone"
            className="w-full rounded-md border border-line bg-background px-3 py-2.5 outline-none ring-brand focus:ring-2"
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="mb-1.5 block font-medium">Service *</span>
          <select
            required
            name="service"
            defaultValue=""
            className="w-full rounded-md border border-line bg-background px-3 py-2.5 outline-none ring-brand focus:ring-2"
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="mb-1.5 block font-medium">Description *</span>
          <textarea
            required
            name="description"
            rows={5}
            className="w-full rounded-md border border-line bg-background px-3 py-2.5 outline-none ring-brand focus:ring-2"
            placeholder="Describe the moment work slows down or the product outcome you need."
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark sm:w-auto"
      >
        Show us the bottleneck
      </button>
    </form>
  );
}
