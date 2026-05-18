type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="card-surface flex flex-col items-center gap-2 px-6 py-10 text-center">
      <p className="font-display text-2xl text-ink-900">{title}</p>
      <p className="text-sm text-ink-700">{description}</p>
    </div>
  );
}
