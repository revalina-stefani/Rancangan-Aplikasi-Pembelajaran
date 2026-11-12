interface Props {
  /** 0–100 */
  value: number;
  label: string;
}

export default function ProgressBar({ value, label }: Props) {
  const v = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={v}
      aria-label={label}
      className="h-2 w-full overflow-hidden rounded-full bg-line"
    >
      <div className="h-full rounded-full bg-primary transition-[width] duration-200" style={{ width: `${v}%` }} />
    </div>
  );
}
