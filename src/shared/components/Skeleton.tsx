import { cn } from "../helpers/cn";

type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "h-4 w-full rounded-full bg-gradient-to-r from-rose-100 via-rose-200 to-rose-100 bg-[length:200%_100%] animate-shimmer",
        className,
      )}
    />
  );
}
