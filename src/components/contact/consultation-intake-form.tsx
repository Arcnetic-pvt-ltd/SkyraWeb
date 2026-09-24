"use client";

import { useState } from "react";

export function ConsultationIntakeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phoneNumber: "",
    propertyLocation: "",
    projectScope: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      workEmail: "",
      phoneNumber: "",
      propertyLocation: "",
      projectScope: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="relative bg-white/85 backdrop-blur-xl rounded-2xl p-6 sm:p-10 shadow-[0_16px_50px_rgba(29,41,59,0.05)] border border-muted-aquifer/15">
      {!submitted ? (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Input: Full Name */}
          <div className="relative flex flex-col group">
            <label
              className="font-body-sm text-body-sm text-deep-aquifer/80 font-medium mb-1.5 transition-all duration-200 group-focus-within:text-forest-slate"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              className="w-full bg-light-aquifer-canvas px-4 py-3.5 rounded-lg font-body-primary text-deep-aquifer placeholder:text-muted-aquifer/70 transition-all duration-200 outline-none shadow-sm border border-muted-aquifer/20 focus:bg-white focus:border-moss focus:shadow-[0_0_0_2px_rgba(125,157,61,0.35)]"
              id="fullName"
              name="fullName"
              placeholder="e.g. Maya Menon"
              required
              type="text"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          </div>

          {/* Two Column split for Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Input: Work Email */}
            <div className="relative flex flex-col group">
              <label
                className="font-body-sm text-body-sm text-deep-aquifer/80 font-medium mb-1.5 transition-all duration-200 group-focus-within:text-forest-slate"
                htmlFor="workEmail"
              >
                Work Email
              </label>
              <input
                className="w-full bg-light-aquifer-canvas px-4 py-3.5 rounded-lg font-body-primary text-deep-aquifer placeholder:text-muted-aquifer/70 transition-all duration-200 outline-none shadow-sm border border-muted-aquifer/20 focus:bg-white focus:border-moss focus:shadow-[0_0_0_2px_rgba(125,157,61,0.35)]"
                id="workEmail"
                name="workEmail"
                placeholder="maya@studio.in"
                required
                type="email"
                value={formData.workEmail}
                onChange={(e) =>
                  setFormData({ ...formData, workEmail: e.target.value })
                }
              />
            </div>

            {/* Input: Phone / WhatsApp */}
            <div className="relative flex flex-col group">
              <label
                className="font-body-sm text-body-sm text-deep-aquifer/80 font-medium mb-1.5 transition-all duration-200 group-focus-within:text-forest-slate"
                htmlFor="phoneNumber"
              >
                Phone / WhatsApp
              </label>
              <input
                className="w-full bg-light-aquifer-canvas px-4 py-3.5 rounded-lg font-body-primary text-deep-aquifer placeholder:text-muted-aquifer/70 transition-all duration-200 outline-none shadow-sm border border-muted-aquifer/20 focus:bg-white focus:border-moss focus:shadow-[0_0_0_2px_rgba(125,157,61,0.35)]"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="+91 98470 00000"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
              />
            </div>
          </div>

          {/* Input: Property Location / District */}
          <div className="relative flex flex-col group">
            <label
              className="font-body-sm text-body-sm text-deep-aquifer/80 font-medium mb-1.5 transition-all duration-200 group-focus-within:text-forest-slate"
              htmlFor="propertyLocation"
            >
              Property Location / District
            </label>
            <input
              className="w-full bg-light-aquifer-canvas px-4 py-3.5 rounded-lg font-body-primary text-deep-aquifer placeholder:text-muted-aquifer/70 transition-all duration-200 outline-none shadow-sm border border-muted-aquifer/20 focus:bg-white focus:border-moss focus:shadow-[0_0_0_2px_rgba(125,157,61,0.35)]"
              id="propertyLocation"
              name="propertyLocation"
              placeholder="e.g. Kakkanad, Ernakulam or Whitefield, Bengaluru"
              type="text"
              value={formData.propertyLocation}
              onChange={(e) =>
                setFormData({ ...formData, propertyLocation: e.target.value })
              }
            />
          </div>

          {/* Input: Help inquiry */}
          <div className="relative flex flex-col group">
            <div className="flex justify-between items-center mb-1.5">
              <label
                className="font-body-sm text-body-sm text-deep-aquifer/80 font-medium transition-all duration-200 group-focus-within:text-forest-slate"
                htmlFor="projectScope"
              >
                How can Skyra help you?
              </label>
              <span className="font-body-sm text-[12px] text-deep-aquifer/50">
                Optional thoughts
              </span>
            </div>
            <textarea
              className="w-full bg-light-aquifer-canvas px-4 py-3.5 rounded-lg font-body-primary text-deep-aquifer placeholder:text-muted-aquifer/70 transition-all duration-200 outline-none resize-none shadow-sm border border-muted-aquifer/20 focus:bg-white focus:border-moss focus:shadow-[0_0_0_2px_rgba(125,157,61,0.35)]"
              id="projectScope"
              name="projectScope"
              placeholder="Take your time — mention campus size, existing borewells, recharge targets, or simply the general goals for your site..."
              rows={4}
              value={formData.projectScope}
              onChange={(e) =>
                setFormData({ ...formData, projectScope: e.target.value })
              }
            />
          </div>

          {/* Action button */}
          <div className="pt-2 flex flex-col gap-4">
            <button
              className="relative group w-full py-4 px-8 rounded-lg bg-deep-aquifer hover:bg-forest-slate text-light-aquifer-canvas font-button-text text-button-text flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:shadow-xl active:scale-[0.99] overflow-hidden cursor-pointer"
              type="submit"
            >
              <span className="relative z-10 tracking-normal">
                Begin the Conversation
              </span>
              <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                arrow_right_alt
              </span>
            </button>
            <div className="flex items-center justify-center gap-2 text-center pt-1">
              <span className="material-symbols-outlined text-[16px] text-moss shrink-0">
                shield
              </span>
              <p className="font-body-sm text-[13px] text-deep-aquifer/60">
                Your information is treated with complete confidentiality by our senior hydrologists.
              </p>
            </div>
          </div>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center py-8 text-center transition-all duration-500">
          <div className="h-16 w-16 rounded-full bg-secondary-container flex items-center justify-center text-forest-slate mb-5">
            <span className="material-symbols-outlined text-[32px]">check</span>
          </div>
          <h3 className="font-headline-h3 text-headline-h3 text-deep-aquifer font-semibold">
            Thank you for reaching out
          </h3>
          <p className="mt-3 font-body-primary text-deep-aquifer/75 max-w-sm leading-relaxed">
            We’ve received your note. A senior hydrologist from our Kochi team will review your site geography and reach out quietly within 24 hours.
          </p>
          <button
            type="button"
            className="mt-8 font-button-text text-body-sm text-moss hover:text-forest-slate font-medium underline underline-offset-4 cursor-pointer"
            onClick={handleReset}
          >
            Send another message
          </button>
        </div>
      )}
    </div>
  );
}
