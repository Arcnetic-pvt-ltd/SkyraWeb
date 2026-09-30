"use client";

export function SkyraLogo({
  className = "h-7 w-auto",
  iconClass = "h-7 w-auto max-h-8",
  textClass = "font-headline-h3 text-[20px] font-semibold tracking-tight",
  showText = true,
  variant = "default",
}: {
  className?: string;
  iconClass?: string;
  textClass?: string;
  showText?: boolean;
  variant?: "default" | "light";
}) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/images/skyra-logo.png"
        alt="Skyra Logo"
        className={`${iconClass} object-contain ${variant === "light" ? "brightness-0 invert" : ""
          }`}
      />
      {showText && (
        <span
          className={`${textClass} ${variant === "light" ? "text-white" : "text-deep-aquifer"
            }`}
        >
          SkyRa
        </span>
      )}
    </div>
  );
}
