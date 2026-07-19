type CarouselDirection = 'previous' | 'next';

type CarouselNavigationButtonProps = {
  direction: CarouselDirection;
  label: string;
  disabled: boolean;
  onClick: () => void;
};

const navigationButtonClasses = `
  flex
  size-10
  items-center
  justify-center
  rounded-full
  border
  transition
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-teal-700
  enabled:cursor-pointer
  enabled:border-slate-300
  enabled:bg-white
  enabled:text-slate-800
  enabled:shadow-sm
  enabled:hover:border-teal-700
  enabled:hover:bg-teal-50
  disabled:cursor-not-allowed
  disabled:border-slate-200
  disabled:bg-slate-100
  disabled:text-slate-300
  disabled:shadow-none
  disabled:opacity-60
`;

export function CarouselNavigationButton({
  direction,
  label,
  disabled,
  onClick,
}: CarouselNavigationButtonProps) {
  const path = direction === 'previous' ? 'm12.5 15-5-5 5-5' : 'm7.5 5 5 5-5 5';

  return (
    <button
      type="button"
      aria-label={label}
      aria-controls="charger-comparison-carousel"
      disabled={disabled}
      onClick={onClick}
      className={navigationButtonClasses}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d={path} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
