"use client";

import { useRef, useState } from "react";
import { submitConsultation } from "@/app/contact/actions";
import {
  validateConsultation,
  validateField,
  type ConsultationErrors,
  type ConsultationFields,
} from "@/lib/contact-validation";

const EMPTY: ConsultationFields = {
  fullName: "",
  whatsAppNumber: "",
  propertyLocation: "",
};

const FIELD_ORDER: (keyof ConsultationFields)[] = [
  "fullName",
  "whatsAppNumber",
  "propertyLocation",
];

const labelClass = "font-body-sm text-body-sm text-deep-aquifer font-medium";

const inputClass = (hasError: boolean) =>
  `w-full bg-light-aquifer-canvas px-4 py-3 rounded-[6px] font-body-primary text-deep-aquifer border ${
    hasError ? "border-red-500" : "border-muted-aquifer/20"
  } outline-none focus:border-deep-aquifer transition-colors`;

export function ConsultationIntakeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ConsultationFields>(EMPTY);
  const [errors, setErrors] = useState<ConsultationErrors>({});
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const setError = (key: keyof ConsultationFields, message: string) =>
    setErrors((prev) => {
      const next = { ...prev };
      if (message) next[key] = message;
      else delete next[key];
      return next;
    });

  const handleChange = (key: keyof ConsultationFields, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    // Revalidate live only once a field has been flagged.
    if (errors[key]) setError(key, validateField(key, value));
  };

  const handleBlur = (key: keyof ConsultationFields) =>
    setError(key, validateField(key, formData[key]));

  const focusField = (key: keyof ConsultationFields) =>
    formRef.current?.querySelector<HTMLInputElement>(`[name="${key}"]`)?.focus();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validateConsultation(formData);
    setErrors(found);
    const firstInvalid = FIELD_ORDER.find((k) => found[k]);
    if (firstInvalid) {
      focusField(firstInvalid);
      return;
    }
    setSubmitError("");
    setSending(true);
    const website = new FormData(e.currentTarget).get("website");
    try {
      const result = await submitConsultation({
        ...formData,
        website: typeof website === "string" ? website : "",
      });
      if (result.ok) {
        setSubmitted(true);
      } else {
        if (result.fieldErrors) {
          setErrors(result.fieldErrors);
          const first = FIELD_ORDER.find((k) => result.fieldErrors?.[k]);
          if (first) focusField(first);
        }
        setSubmitError(result.error);
      }
    } catch {
      setSubmitError("Something went wrong. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  const handleReset = () => {
    setFormData(EMPTY);
    setErrors({});
    setSubmitError("");
    setSubmitted(false);
  };

  const fieldProps = (key: keyof ConsultationFields) => ({
    id: key,
    name: key,
    value: formData[key],
    className: inputClass(!!errors[key]),
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      handleChange(key, e.target.value),
    onBlur: () => handleBlur(key),
  });

  const fieldError = (key: keyof ConsultationFields) =>
    errors[key] ? (
      <span id={`${key}-error`} className="text-xs text-red-600 font-medium" role="alert">
        {errors[key]}
      </span>
    ) : null;

  return (
    <div className="relative bg-white rounded-[6px] p-6 sm:p-8 border border-muted-aquifer/20 shadow-xs">
      {!submitted ? (
        <form className="flex flex-col gap-5" noValidate onSubmit={handleSubmit} ref={formRef}>
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
            <label className={labelClass} htmlFor="fullName">
              Name
            </label>
            <input
              {...fieldProps("fullName")}
              autoComplete="name"
              maxLength={100}
              placeholder="e.g. Anand Varma"
              type="text"
            />
            {fieldError("fullName")}
          </div>

          {/* Field 2: WhatsApp number */}
          <div className="flex flex-col gap-1.5">
            <label className={labelClass} htmlFor="whatsAppNumber">
              WhatsApp number
            </label>
            <input
              {...fieldProps("whatsAppNumber")}
              autoComplete="tel"
              maxLength={30}
              placeholder="e.g. 9847000000"
              type="tel"
            />
            {fieldError("whatsAppNumber")}
          </div>

          {/* Field 3: Location */}
          <div className="flex flex-col gap-1.5">
            <label className={labelClass} htmlFor="propertyLocation">
              Location
            </label>
            <input
              {...fieldProps("propertyLocation")}
              maxLength={200}
              placeholder="e.g. Kalamassery, Kochi"
              type="text"
            />
            {fieldError("propertyLocation")}
          </div>

          {/* Honeypot: hidden from users, filled by bots */}
          <input
            aria-hidden="true"
            autoComplete="off"
            className="hidden"
            name="website"
            tabIndex={-1}
            type="text"
          />

          {/* Action button */}
          <div className="pt-2 flex flex-col gap-3">
            {submitError && (
              <p className="text-sm text-red-600 font-medium" role="alert">
                {submitError}
              </p>
            )}
            <button
              className="w-full py-3.5 px-6 rounded-[6px] bg-deep-aquifer bg-clip-padding border border-transparent hover:bg-forest-slate text-white font-medium text-[15px] min-h-[44px] transition-colors cursor-pointer shadow-xs disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={sending}
              type="submit"
            >
              {sending ? "Sending…" : "Book a Site Survey"}
            </button>
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
            Submit Another Property
          </button>
        </div>
      )}
    </div>
  );
}
