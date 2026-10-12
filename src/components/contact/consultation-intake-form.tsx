"use client";

import { useState } from "react";

export function ConsultationIntakeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    whatsAppNumber: "",
    propertyLocation: "",
  });

  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = formData.whatsAppNumber.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setPhoneError("Enter a 10-digit phone number");
      return;
    }
    setPhoneError("");
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      whatsAppNumber: "",
      propertyLocation: "",
    });
    setPhoneError("");
    setSubmitted(false);
  };

  return (
    <div className="relative bg-white rounded-[6px] p-6 sm:p-8 border border-muted-aquifer/20 shadow-xs">
      {!submitted ? (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="mb-2">
            <h2 className="font-headline-h2 text-[24px] font-semibold text-deep-aquifer">
              Tell us about your property
            </h2>
            <p className="font-body-sm text-body-sm text-deep-aquifer/75 mt-1">
              We&apos;ll reply on WhatsApp within one working day.
            </p>
          </div>

          {/* Field 1: Name */}
          <div className="flex flex-col gap-1.5">
            <label
              className="font-body-sm text-body-sm text-deep-aquifer font-medium"
              htmlFor="fullName"
            >
              Name
            </label>
            <input
              className="w-full bg-light-aquifer-canvas px-4 py-3 rounded-[6px] font-body-primary text-deep-aquifer border border-muted-aquifer/20 outline-none focus:border-deep-aquifer transition-colors"
              id="fullName"
              name="fullName"
              required
              type="text"
              placeholder="e.g. Anand Varma"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          </div>

          {/* Field 2: WhatsApp number */}
          <div className="flex flex-col gap-1.5">
            <label
              className="font-body-sm text-body-sm text-deep-aquifer font-medium"
              htmlFor="whatsAppNumber"
            >
              WhatsApp number
            </label>
            <input
              className={`w-full bg-light-aquifer-canvas px-4 py-3 rounded-[6px] font-body-primary text-deep-aquifer border ${
                phoneError ? "border-red-500" : "border-muted-aquifer/20"
              } outline-none focus:border-deep-aquifer transition-colors`}
              id="whatsAppNumber"
              name="whatsAppNumber"
              placeholder="e.g. 9847000000"
              required
              type="tel"
              value={formData.whatsAppNumber}
              onChange={(e) => {
                if (phoneError) setPhoneError("");
                setFormData({ ...formData, whatsAppNumber: e.target.value });
              }}
            />
            {phoneError && (
              <span className="text-xs text-red-600 font-medium">{phoneError}</span>
            )}
          </div>

          {/* Field 3: Location */}
          <div className="flex flex-col gap-1.5">
            <label
              className="font-body-sm text-body-sm text-deep-aquifer font-medium"
              htmlFor="propertyLocation"
            >
              Location
            </label>
            <input
              className="w-full bg-light-aquifer-canvas px-4 py-3 rounded-[6px] font-body-primary text-deep-aquifer border border-muted-aquifer/20 outline-none focus:border-deep-aquifer transition-colors"
              id="propertyLocation"
              name="propertyLocation"
              placeholder="e.g. Kalamassery, Kochi"
              required
              type="text"
              value={formData.propertyLocation}
              onChange={(e) =>
                setFormData({ ...formData, propertyLocation: e.target.value })
              }
            />
          </div>

          {/* Action button & response time notice */}
          <div className="pt-2 flex flex-col gap-3">
            <button
              className="w-full py-3.5 px-6 rounded-[6px] bg-deep-aquifer hover:bg-forest-slate text-white font-medium text-[15px] min-h-[44px] transition-colors cursor-pointer shadow-xs"
              type="submit"
            >
              Book a site survey
            </button>
            <p className="font-body-sm text-[13px] text-deep-aquifer/70 text-center">
              We&apos;ll reply on WhatsApp within one working day.
            </p>
          </div>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="h-12 w-12 rounded-full bg-moss/20 flex items-center justify-center text-forest-slate mb-4">
            <span className="material-symbols-outlined text-[24px]">check</span>
          </div>
          <h3 className="font-headline-h2 text-[22px] text-deep-aquifer font-semibold">
            Thank you for requesting a site survey
          </h3>
          <p className="mt-2 font-body-primary text-deep-aquifer/80 max-w-sm leading-relaxed text-[15px]">
            We&apos;ve received your property details. Our team will review your location and reply on WhatsApp within one working day.
          </p>
          <button
            type="button"
            className="mt-6 text-[14px] text-moss hover:text-forest-slate font-medium underline underline-offset-4 cursor-pointer"
            onClick={handleReset}
          >
            Submit another property
          </button>
        </div>
      )}
    </div>
  );
}
