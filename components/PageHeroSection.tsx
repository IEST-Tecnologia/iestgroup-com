import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import BannerQuemSomos from "@/assets/sobre-nos/banner-quem-somos.jpg";

interface PageHeroSectionProps {
  backgroundBannerImage: StaticImageData;
  secondBannerImage: StaticImageData;
  secondBannerAlt: string;
  children: ReactNode;
  service: boolean;
  shadowbg: boolean;
}

export default function PageHeroSection({
  backgroundBannerImage,
  secondBannerImage,
  secondBannerAlt,
  children,
  service,
  shadowbg,
}: PageHeroSectionProps) {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${backgroundBannerImage.src})` }}
      >
        {shadowbg && (
          <div className="absolute bg-black opacity-65 inset-0"></div>
        )}
        <div className="max-w-7xl min-h-93 md:h-[70vh]"></div>
      </div>
      <main className="w-full relative mx-auto flex">
        <div className="md:w-[10%] flex min-h-1 relative">
          <div className="w-full flex flex-wrap content-start"></div>
        </div>
        <div className="w-full md:w-[90%] flex min-h-1 relative">
          <div className="w-full relative flex flex-wrap content-start bg-white shadow-card -mt-30 px-[5%] pt-[5%] pb-[10%]">
            {children}
          </div>
        </div>
      </main>
      <section className="w-full relative mx-auto flex">
        <div className="md:w-[20%] flex min-h-1 relative">
          <div className="w-full flex flex-wrap content-start"></div>
        </div>
        <div className="w-full md:w-[80%] flex min-h-1 relative">
          <div
            className={`w-full relative flex flex-wrap content-start bg-white ${service ? "md:-mt-52" : "md:-mt-30"} `}
          >
            <Image
              className="w-full h-full"
              src={secondBannerImage}
              alt={secondBannerAlt}
            />
          </div>
        </div>
      </section>
    </>
  );
}
