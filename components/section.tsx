interface SectionProps {
  variant?: "light" | "dark";
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  variant = "light",
  children,
  className = "",
  id,
}: SectionProps) {
  const base =
    variant === "light"
      ? "bg-white text-[#5a6478]"
      : "bg-[#030f26] text-[#8a99ad]";

  return (
    <section id={id} className={`${base} ${className}`}>
      {children}
    </section>
  );
}
