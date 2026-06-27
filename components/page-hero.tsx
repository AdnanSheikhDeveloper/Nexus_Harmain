import Image from "next/image";

interface PageHeroProps {
  image: string;
  alt: string;
  children: React.ReactNode;
  size?: "default" | "large";
}

export default function PageHero({
  image,
  alt,
  children,
  size = "default",
}: PageHeroProps) {
  const heightClass =
    size === "large"
      ? "min-h-[28rem] sm:min-h-[32rem] lg:min-h-[40rem]"
      : "min-h-[22rem] sm:min-h-[26rem]";

  const paddingClass =
    size === "large"
      ? "py-24 sm:py-32 lg:py-44"
      : "py-20 sm:py-28";

  return (
    <section
      className={`page-hero relative overflow-hidden bg-[#030f26] ${heightClass}`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-[#030f26]/92 via-[#030f26]/78 to-[#030f26]/55"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-t from-[#030f26]/70 via-transparent to-[#030f26]/25"
        aria-hidden
      />

      <div className={`relative z-[2] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${paddingClass}`}>
        {children}
      </div>
    </section>
  );
}
