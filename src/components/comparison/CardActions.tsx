type CardActionsProps = {
  chargerName: string;
};

export function CardActions({ chargerName }: CardActionsProps) {
  return (
    <div className="border-t border-slate-200 px-6 py-5">
      <button
        type="button"
        aria-label={`Check compatibility for ${chargerName}`}
        className="
          w-full
          rounded-lg
          cursor-pointer
          bg-amber-300
          px-4
          py-3
          text-sm
          font-semibold
          text-slate-950
          transition
          hover:bg-amber-400
          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-teal-700
        "
      >
        Check home compatibility
      </button>
    </div>
  );
}
