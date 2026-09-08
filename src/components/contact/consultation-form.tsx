"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { CheckIcon } from "@/components/icons/vision-icons";
import { WaterSecurityIcon } from "@/components/icons/solution-icons";
import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";
import { LockIcon } from "@/components/icons/contact-form-icons";

const PROPERTY_TYPES = [
  "Residential",
  "Apartment Complex",
  "Commercial Facility",
  "Industrial Site",
  "Agricultural Land",
  "Other",
] as const;

type FormState = {
  fullName: string;
  phone: string;
  location: string;
  propertyType: string;
  message: string;
};

const EMPTY_FORM: FormState = { fullName: "", phone: "", location: "", propertyType: "", message: "" };

const inputClass =
  "w-full border-0 border-b-[1.5px] border-slate-300 bg-transparent px-0 py-3 pb-2 text-sm text-slate-900 transition-all placeholder:text-slate-400 focus:border-brand-teal focus:outline-none focus:ring-0";

/**
 * Request a Consultation form. Static UI only, per the brief: client-side
 * required-field validation via the browser, but the submit handler does
 * not send data anywhere — see the TODO below. No backend, no CMS.
 */
export function ConsultationForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to a real backend / CRM / email service. No form
    // submission endpoint exists yet — this only shows a local success
    // state and does not send `form` anywhere.
    setSubmitted(true);
  }

  return (
    <section className="bg-white py-16 text-slate-900 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Context & Facility Photo */}
          <div className="space-y-8 lg:col-span-5">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-teal/30 bg-brand-teal/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-800">
                Site Assessment • 24h Turnaround
              </div>
              <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-4xl">
                Request a Consultation
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Drop us a message and our civil hydrological engineers will
                get back to you within 24 hours to schedule an on-site
                feasibility study or custom water storage simulation.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-2xl">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/contact-facility.jpg"
                  alt="SkyRa Hydrological Engineering Facility, Kerala"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-linear-to-t from-slate-950/80 via-transparent to-transparent p-6">
                <div className="text-white">
                  <span className="mb-1 block font-mono text-xs uppercase tracking-wider text-teal-300">
                    R&amp;D &amp; Engineering Hub
                  </span>
                  <p className="text-sm font-semibold">
                    South India Rainwater Harvesting Research Center, Kerala
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-100/70 text-teal-700">
                  <CheckIcon className="size-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Zero-Obligation Assessment</h4>
                  <p className="text-xs text-slate-500">
                    Free initial catchment calculation and aquifer depth analysis.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-100/70 text-teal-700">
                  <WaterSecurityIcon className="size-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">KSPCB &amp; Municipal Compliance</h4>
                  <p className="text-xs text-slate-500">
                    100% compliant with Kerala and South India water security mandates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="relative rounded-3xl border border-slate-200/90 bg-slate-50 p-8 shadow-xl lg:col-span-7 md:p-12">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckIcon className="size-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Request received</h3>
                <p className="mt-2 max-w-sm text-sm text-slate-600">
                  Thank you, {form.fullName.split(" ")[0] || "there"}. Our team
                  will contact you within 24 hours to schedule your assessment.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(EMPTY_FORM);
                    setSubmitted(false);
                  }}
                  className="mt-6 text-sm font-semibold text-brand-teal hover:text-brand-green"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900">Tell us about your property</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Fill out the brief details below and we will contact you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                        Full Name <span className="text-brand-teal">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        placeholder="e.g. Anand Varma"
                        value={form.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                        Phone / WhatsApp Number <span className="text-brand-teal">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="e.g. +91 98450 12345"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={`${inputClass} font-mono`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                      <label htmlFor="location" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                        Location / District <span className="text-brand-teal">*</span>
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        required
                        placeholder="e.g. Ernakulam / Kochi, Kerala"
                        value={form.location}
                        onChange={(e) => handleChange("location", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="propertyType" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                        Property Type <span className="text-brand-teal">*</span>
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        required
                        value={form.propertyType}
                        onChange={(e) => handleChange("propertyType", e.target.value)}
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option value="" disabled>Select Property Type</option>
                        {PROPERTY_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-700">
                      How can we help you?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Share your roof catchment area, seasonal water challenges, or project goals…"
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div className="flex flex-col items-center justify-between gap-4 pt-4 sm:flex-row">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-teal-600 to-brand-teal px-9 py-4 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 transition-all hover:shadow-teal-600/40 sm:w-auto"
                    >
                      Submit Request
                      <ArrowRightIcon className="size-4" />
                    </button>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <LockIcon className="size-3.5 text-slate-400" />
                      Your information is strictly protected
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
