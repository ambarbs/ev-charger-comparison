import { CarouselNavigationButton } from './CarouselNavigationButton';

type DesktopCarouselControlProps = {
  direction: 'previous' | 'next';
  disabled: boolean;
  onClick: () => void;
};

export function DesktopCarouselControl({
  direction,
  disabled,
  onClick,
}: DesktopCarouselControlProps) {
  const isPrevious = direction === 'previous';

  const columnClass = isPrevious ? 'md:col-start-1' : 'md:col-start-3';

  return (
    <div
      className={`
        relative
        hidden
        md:row-start-1
        md:block
        ${columnClass}
      `}
    >
      <div
        className="
          sticky
          top-[50vh]
          flex
          -translate-y-1/2
          justify-center
        "
      >
        <CarouselNavigationButton
          direction={direction}
          label={isPrevious ? 'Show previous charger' : 'Show next charger'}
          disabled={disabled}
          onClick={onClick}
        />
      </div>
    </div>
  );
}
