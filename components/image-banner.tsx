import Image from "next/image";

interface ImageBannerProps {
  image: string;
  alt: string;
  children: React.ReactNode;
  align?: "left" | "center";
}

export default function ImageBanner({
  image,
  alt,
  children,
  align = "left",
}: ImageBannerProps) {
  return (
    <div className="image-banner relative isolate min-h-[22rem] overflow-hidden rounded-3xl border border-[#0f1a2e]/10 shadow-2xl shadow-[#030f26]/25 sm:min-h-[26rem] lg:min-h-[30rem]">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 1280px) 100vw, 1280px"
        priority={false}
      />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-[#030f26]/88 via-[#030f26]/72 to-[#030f26]/35"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-t from-[#030f26]/50 via-transparent to-[#030f26]/20"
        aria-hidden
      />

      <div
        className={`relative z-[2] flex min-h-[22rem] flex-col justify-center px-8 py-14 sm:min-h-[26rem] sm:px-12 sm:py-20 lg:min-h-[30rem] lg:px-16 ${
          align === "center"
            ? "items-center text-center"
            : "items-start text-left lg:max-w-2xl"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
