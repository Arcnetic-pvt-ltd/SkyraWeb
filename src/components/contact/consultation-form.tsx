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
  const [phoneError, setPhoneError] = useState("");

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    if (key === "phone" && phoneError) setPhoneError("");
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const cleanPhone = form.phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setPhoneError("Enter a 10-digit phone number");
      return;
    }
    setPhoneError("");
    setSubmitted(true);
  }

  return (
    <section className="bg-light-aquifer-canvas py-16 text-deep-aquifer lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Context & Facility Photo */}
          <div className="space-y-8 lg:col-span-5">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-[4px] border border-muted-aquifer/20 bg-white px-3 py-1 text-xs font-medium text-deep-aquifer shadow-xs">
                Site assessment &middot; 24h turnaround
              </div>
              <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-deep-aquifer md:text-4xl">
                Request a consultation
              </h2>
              <p className="text-base leading-relaxed text-deep-aquifer/75">
                Drop us a message and our civil hydrological engineers will
                get back to you within 24 hours to schedule an on-site
                feasibility study or custom water storage simulation.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-[4px] border border-muted-aquifer/20 bg-white shadow-xs">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/contact-facility.jpg"
                  alt="Skyra Hydrological Engineering Facility, Kerala"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-deep-aquifer/90 via-transparent to-transparent p-6">
                <div className="text-white">
                  <span className="mb-1 block font-mono text-xs uppercase tracking-wider text-moss">
                    R&amp;D &amp; engineering hub
                  </span>
                  <p className="text-sm font-semibold">
                    South India Rainwater Harvesting Research Center, Kerala
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-8 flex-shrink-0 items-center justify-center rounded-[4px] bg-moss/10 text-moss">
                  <CheckIcon className="size-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-deep-aquifer">Zero-obligation assessment</h4>
                  <p className="text-xs text-deep-aquifer/70">
                    Free initial catchment calculation and aquifer depth analysis.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-8 flex-shrink-0 items-center justify-center rounded-[4px] bg-moss/10 text-moss">
                  <WaterSecurityIcon className="size-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-deep-aquifer">KSPCB &amp; municipal compliance</h4>
                  <p className="text-xs text-deep-aquifer/70">
                    100% compliant with Kerala and South India water security mandates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="relative rounded-[4px] border border-muted-aquifer/20 bg-white p-8 shadow-xs lg:col-span-7 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-moss/20 text-moss">
                  <CheckIcon className="size-6" />
                </div>
                <h3 className="text-xl font-bold text-deep-aquifer">Thank you for requesting a site survey</h3>
                <p className="mt-2 max-w-sm text-sm text-deep-aquifer/75 leading-relaxed">
                  We&apos;ve received your property details. Our team will review your location and reply on WhatsApp within one working day.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(EMPTY_FORM);
                    setSubmitted(false);
                  }}
                  className="mt-6 text-sm font-medium text-moss hover:underline cursor-pointer"
                >
                  Submit another property
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-deep-aquifer">Tell us about your property</h3>
                  <p className="mt-1 text-sm text-deep-aquifer/70">
                    We&apos;ll reply on WhatsApp within one working day.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-deep-aquifer">
                      Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="e.g. Anand Varma"
                      value={form.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      className="w-full rounded-[6px] border border-muted-aquifer/30 bg-light-aquifer-canvas px-3.5 py-2.5 text-sm text-deep-aquifer placeholder:text-deep-aquifer/40 focus:border-deep-aquifer focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-deep-aquifer">
                      WhatsApp number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. 9845012345"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className={`w-full rounded-[6px] border ${
                        phoneError ? "border-red-500" : "border-muted-aquifer/30"
                      } bg-light-aquifer-canvas px-3.5 py-2.5 text-sm text-deep-aquifer font-mono placeholder:text-deep-aquifer/40 focus:border-deep-aquifer focus:outline-none`}
                    />
                    {phoneError && (
                      <span className="mt-1 block text-xs font-medium text-red-600">{phoneError}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="location" className="mb-1 block text-sm font-medium text-deep-aquifer">
                      Location
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      placeholder="e.g. Kalamassery, Kochi"
                      value={form.location}
                      onChange={(e) => handleChange("location", e.target.value)}
                      className="w-full rounded-[6px] border border-muted-aquifer/30 bg-light-aquifer-canvas px-3.5 py-2.5 text-sm text-deep-aquifer placeholder:text-deep-aquifer/40 focus:border-deep-aquifer focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col gap-3">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-[6px] bg-deep-aquifer px-8 py-3.5 text-sm font-medium text-white hover:bg-forest-slate transition-colors cursor-pointer"
                    >
                      Book a site survey
                      <ArrowRightIcon className="size-4" />
                    </button>
                    <p className="text-xs text-deep-aquifer/70 text-center">
                      We&apos;ll reply on WhatsApp within one working day. Written report and quote before any work starts.
                    </p>
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
