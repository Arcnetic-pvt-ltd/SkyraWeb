"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import {
  DesignStepIcon,
  InstallStepIcon,
  MaintainStepIcon,
  SurveyStepIcon,
  TestStepIcon,
} from "@/components/icons/process-icons";

const WORK_STEPS = [
  { label: "SURVEY", text: "Roof, soil and well checked on site", Icon: SurveyStepIcon },
  { label: "DESIGN", text: "Written report and quote before any work starts", Icon: DesignStepIcon },
  { label: "INSTALL", text: "With little disruption to your property", Icon: InstallStepIcon },
  { label: "TEST", text: "Water quality lab test & flow verification", Icon: TestStepIcon },
  { label: "MAINTAIN", text: "Simple filter flush guidance & ongoing support", Icon: MaintainStepIcon },
] as const;

const STEP_GAP = 0.55;
const LINE_DURATION = STEP_GAP * (WORK_STEPS.length - 1) + 0.4;

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduce = useReducedMotion();
  const show = inView || reduce;

  return (
    <section className="border-b border-muted-aquifer/20 bg-light-aquifer-canvas py-20">
      <Container>
        <div>
          <div className="mb-14 flex max-w-3xl flex-col gap-2">
            <span className="font-technical-label text-[12px] text-forest-slate uppercase tracking-wider font-semibold">
              HOW WE WORK
            </span>
            <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer leading-tight">
              How a site survey works
            </h2>
            <p className="font-body-large text-body-large text-deep-aquifer/80 leading-relaxed">
              We measure your roof, test how fast the soil absorbs water, and check your well.
            </p>
          </div>

          <div ref={ref} className="relative">
            {/* Track + animated fill: horizontal on desktop */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-8 left-0 right-[calc(20%-2rem)] h-px bg-muted-aquifer/25"
            />
            <motion.div
              aria-hidden="true"
              className="hidden lg:block absolute top-8 left-0 right-[calc(20%-2rem)] h-0.5 -translate-y-1/2 origin-left bg-moss"
              initial={{ scaleX: reduce ? 1 : 0 }}
              animate={{ scaleX: show ? 1 : 0 }}
              transition={{ duration: LINE_DURATION, ease: "linear" }}
            />

            {/* Track + animated fill: vertical on mobile */}
            <div
              aria-hidden="true"
              className="lg:hidden absolute left-8 top-8 bottom-8 w-px bg-muted-aquifer/25"
            />
            <motion.div
              aria-hidden="true"
              className="lg:hidden absolute left-8 top-8 bottom-8 w-0.5 -translate-x-1/2 origin-top bg-moss"
              initial={{ scaleY: reduce ? 1 : 0 }}
              animate={{ scaleY: show ? 1 : 0 }}
              transition={{ duration: LINE_DURATION, ease: "linear" }}
            />

            <ol className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
              {WORK_STEPS.map(({ label, text, Icon }, i) => {
                const delay = i * STEP_GAP;
                return (
                  <li
                    key={label}
                    className="flex lg:flex-col items-start gap-5 text-left"
                  >
                    <motion.div
                      className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-[4px] border border-muted-aquifer/20 bg-white text-deep-aquifer shadow-xs"
                      initial={reduce ? false : { scale: 0.6, opacity: 0 }}
                      animate={show ? { scale: 1, opacity: 1 } : undefined}
                      transition={{ delay, type: "spring", stiffness: 260, damping: 18 }}
                    >
                      {!reduce && (
                        <motion.span
                          aria-hidden="true"
                          className="absolute inset-0 rounded-[4px] border border-moss"
                          initial={{ scale: 1, opacity: 0 }}
                          animate={show ? { scale: 1.45, opacity: [0.6, 0] } : undefined}
                          transition={{ delay, duration: 0.9, ease: "easeOut" }}
                        />
                      )}
                      <Icon className="h-8 w-8" />
                    </motion.div>

                    <motion.div
                      className="flex flex-col gap-1.5 pt-1 lg:pt-0 lg:pr-4"
                      initial={reduce ? false : { opacity: 0, y: 12 }}
                      animate={show ? { opacity: 1, y: 0 } : undefined}
                      transition={{ delay: delay + 0.1, duration: 0.5, ease: "easeOut" }}
                    >
                      <span className="font-technical-label text-xs uppercase text-deep-aquifer/70 font-bold tracking-wider">
                        {String(i + 1).padStart(2, "0")} · {label}
                      </span>
                      <span className="font-body-primary text-[15px] text-deep-aquifer font-medium leading-snug">
                        {text}
                      </span>
                    </motion.div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
