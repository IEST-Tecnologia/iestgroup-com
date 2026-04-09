"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import type { Banner } from "@/lib/admin/types";

export default function BannerCarousel({ banners }: { banners: Banner[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (banners.length === 0) return null;

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {banners.map((banner, index) => (
            <a
              key={banner.id}
              href={banner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-[0_0_100%] min-w-0 w-full"
              aria-label={"Entenda melhor sobre este banner"}
            >
              {/* aspect-ratio reserva o espaço antes da imagem carregar, evitando CLS */}
              <div className="relative w-full aspect-768/853 md:aspect-512/171">
                <picture className="contents">
                  {banner.mobileImageUrl && (
                    <source
                      media="(max-width: 767px)"
                      srcSet={[640, 750, 828]
                        .map(
                          (w) =>
                            `/_next/image?url=${encodeURIComponent(banner.mobileImageUrl!)}&w=${w}&q=75 ${w}w`,
                        )
                        .join(", ")}
                      sizes="100vw"
                    />
                  )}
                  <Image
                    src={banner.imageUrl}
                    alt=""
                    fill
                    sizes={
                      banner.mobileImageUrl
                        ? "(max-width: 767px) 0px, 100vw"
                        : "100vw"
                    }
                    className="object-cover"
                    priority={index === 0}
                    fetchPriority={index === 0 ? "high" : "auto"}
                  />
                </picture>
              </div>
            </a>
          ))}
        </div>
      </div>

      {banners.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            aria-label="Banner anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            aria-label="Próximo banner"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Ir para banner ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  index === selectedIndex
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
