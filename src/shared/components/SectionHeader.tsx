type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="text-sm text-ink-700">{subtitle}</p>}
    </div>
  );
}
