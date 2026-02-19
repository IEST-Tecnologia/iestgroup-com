"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import type { Client } from "@/lib/admin/types";

function MarqueeRow({
  clients,
  reverse,
}: {
  clients: Client[];
  reverse: boolean;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      if (reverse) {
        emblaApi.scrollPrev();
      } else {
        emblaApi.scrollNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi, reverse]);

  return (
    <div className="w-full overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex-[0_0_20%] min-w-0 flex items-center justify-center px-3"
          >
            <Image
              src={client.logoUrl}
              alt=""
              width={150}
              height={150}
              style={{ width: "150px", height: "150px" }}
              className="max-w-37.5 max-h-37.5 rounded-lg object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function splitIntoChunks<T>(arr: T[], n: number): T[][] {
  const size = Math.ceil(arr.length / n);
  return Array.from({ length: n }, (_, i) =>
    arr.slice(i * size, i * size + size),
  );
}

export default function ClientsMarquee({ clients }: { clients: Client[] }) {
  if (clients.length === 0) return null;

  const rows = splitIntoChunks(clients, 3);

  return (
    <div className="flex w-full flex-col gap-6">
      {rows.map((rowClients, i) => (
        <MarqueeRow key={i} clients={rowClients} reverse={i % 2 === 1} />
      ))}
    </div>
  );
}
