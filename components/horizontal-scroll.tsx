interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
}

export default function HorizontalScroll({
  children,
  className = "",
}: HorizontalScrollProps) {
  return (
    <div
      className={`flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:overflow-visible md:pb-0 ${className}`}
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {children}
    </div>
  );
}
