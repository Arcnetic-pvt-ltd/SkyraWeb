import type { SVGProps } from "react";

/** "How a site survey works" step icons: survey, design, install, test, maintain. */

const base = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  xmlns: "http://www.w3.org/2000/svg",
} as const;

export function SurveyStepIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 15 16 5l13 10" />
      <path d="M7 13v4M25 13v4" />
      <path d="M4 26h24" />
      <path d="M4 22v8M28 22v8" />
      <path d="M8 24v2M12 24v2M16 24v2M20 24v2M24 24v2" />
    </svg>
  );
}

export function DesignStepIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M8 3h11l6 6v20H8z" />
      <path d="M19 3v6h6" />
      <path d="M12 15h9M12 19h9" />
      <path d="m12 25 6.5-6.5 2.5 2.5L14.5 27.5 12 28z" strokeWidth={1.4} />
    </svg>
  );
}

export function InstallStepIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 10h13a5 5 0 0 1 5 5v1" />
      <path d="M4 6v8M22 16v4" />
      <rect x="18" y="20" width="8" height="4" rx="1" />
      <path d="M22 24v3" />
      <path d="M22 27c-2 0-3.2 1-3.2 2.2h6.4C25.2 28 24 27 22 27z" />
    </svg>
  );
}

export function TestStepIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4h8" />
      <path d="M13 4v8L6 25a2.5 2.5 0 0 0 2.2 3.7h15.6A2.5 2.5 0 0 0 26 25l-7-13V4" />
      <path d="M9.5 20h13" />
      <path d="M16 22.2c-1.4 1.6-2 2.4-2 3.3a2 2 0 0 0 4 0c0-.9-.6-1.7-2-3.3z" />
    </svg>
  );
}

export function MaintainStepIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M26 15a10 10 0 0 0-17.5-6.5L6 11" />
      <path d="M6 5v6h6" />
      <path d="M6 17a10 10 0 0 0 17.5 6.5L26 21" />
      <path d="M26 27v-6h-6" />
      <path d="M16 12c-1.6 1.8-2.4 2.8-2.4 3.8a2.4 2.4 0 0 0 4.8 0c0-1-.8-2-2.4-3.8z" />
    </svg>
  );
}
