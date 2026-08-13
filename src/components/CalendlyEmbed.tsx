"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site";

type CalendlyEmbedProps = {
  className?: string;
};

export function CalendlyEmbed({ className = "" }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existingCss = document.querySelector('link[data-calendly-css="true"]');
    if (!existingCss) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      link.dataset.calendlyCss = "true";
      document.head.appendChild(link);
    }

    const existing = document.querySelector('script[data-calendly-widget="true"]');

    const init = () => {
      const calendly = (
        window as Window & {
          Calendly?: {
            initInlineWidget: (options: {
              url: string;
              parentElement: HTMLElement;
              prefill?: Record<string, string>;
            }) => void;
          };
        }
      ).Calendly;

      if (calendly && containerRef.current) {
        containerRef.current.innerHTML = "";
        calendly.initInlineWidget({
          url: `${siteConfig.calendlyUrl}?hide_gdpr_banner=1&hide_landing_page_details=0`,
          parentElement: containerRef.current,
        });
      }
    };

    if (existing) {
      init();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.dataset.calendlyWidget = "true";
    script.onload = init;
    document.body.appendChild(script);
  }, []);

  return (
    <div className={`calendly-embed-shell w-full max-w-full overflow-hidden ${className}`}>
      <div
        ref={containerRef}
        className="calendly-inline-widget w-full max-w-full rounded-2xl border border-line bg-white"
        data-url={siteConfig.calendlyUrl}
        style={{ minWidth: "280px" }}
      />
    </div>
  );
}
