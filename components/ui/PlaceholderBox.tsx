type PlaceholderBoxProps = {
  label: string;
  className?: string;
  initials?: string;
};

function getInitials(label: string): string {
  return label
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function PlaceholderBox({
  label,
  className = "",
  initials,
}: PlaceholderBoxProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-3xl border border-dashed border-kw-dark/15 bg-white/70 p-6 text-center ${className}`}
    >
      <div>
        <p className="text-4xl font-black tracking-tight text-kw-dark/55">
          {initials ?? getInitials(label)}
        </p>
        <p className="mt-2 text-sm font-medium text-kw-dark/60">{label}</p>
      </div>
    </div>
  );
}
