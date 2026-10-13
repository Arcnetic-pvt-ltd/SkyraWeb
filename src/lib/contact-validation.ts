export type ConsultationFields = {
  fullName: string;
  whatsAppNumber: string;
  propertyLocation: string;
};

export type ConsultationErrors = Partial<Record<keyof ConsultationFields, string>>;

/**
 * Normalizes a phone number to digits with an optional leading "+".
 * Returns null if it isn't a valid Indian mobile or international number.
 */
export function normalizePhone(raw: string): string | null {
  const cleaned = raw.replace(/[\s\-().]/g, "");
  if (!/^\+?\d+$/.test(cleaned)) return null;

  if (cleaned.startsWith("+")) {
    const digits = cleaned.slice(1);
    if (digits.startsWith("91")) {
      return /^91[6-9]\d{9}$/.test(digits) ? `+${digits}` : null;
    }
    return /^\d{8,15}$/.test(digits) && !digits.startsWith("0") ? `+${digits}` : null;
  }

  const local = cleaned.replace(/^(91|0)(?=\d{10}$)/, "");
  return /^[6-9]\d{9}$/.test(local) ? `+91${local}` : null;
}

export function validateField<K extends keyof ConsultationFields>(
  key: K,
  value: string,
): string {
  const v = value.trim();
  switch (key) {
    case "fullName":
      if (!v) return "Enter your name";
      if (v.length < 2) return "Name is too short";
      if (v.length > 100) return "Name must be 100 characters or fewer";
      if (!/\p{L}/u.test(v)) return "Name must contain letters";
      return "";
    case "whatsAppNumber":
      if (!v) return "Enter your WhatsApp number";
      return normalizePhone(v)
        ? ""
        : "Enter a valid 10-digit mobile number, or include your country code";
    case "propertyLocation":
      if (!v) return "Enter the property location";
      if (v.length < 3) return "Location is too short";
      if (v.length > 200) return "Location must be 200 characters or fewer";
      return "";
    default:
      return "";
  }
}

export function validateConsultation(data: ConsultationFields): ConsultationErrors {
  const errors: ConsultationErrors = {};
  for (const key of Object.keys(data) as (keyof ConsultationFields)[]) {
    const message = validateField(key, String(data[key] ?? ""));
    if (message) errors[key] = message;
  }
  return errors;
}
