'use client';

import { useEffect, useRef, type MouseEvent } from 'react';

type InstallationRequirementsDialogProps = {
  id: string;
  chargerName: string;
  isOpen: boolean;
  onClose: () => void;
};

export function InstallationRequirementsDialog({
  id,
  chargerName,
  isOpen,
  onClose,
}: InstallationRequirementsDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const titleId = `${id}-title`;
  const descriptionId = `${id}-description`;

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isOpen && !dialog.open) {
      dialog.showModal();
      return;
    }

    if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  function closeDialog() {
    dialogRef.current?.close();
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) {
      closeDialog();
    }
  }

  return (
    <dialog
      id={id}
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onClose={onClose}
      onClick={handleBackdropClick}
      className="
        m-auto
        w-[min(32rem,calc(100%-2rem))]
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-0
        text-slate-900
        shadow-xl
        backdrop:bg-slate-950/40
      "
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-teal-700">
              Installation guidance
            </p>

            <h2 id={titleId} className="mt-1 text-xl font-bold text-slate-950">
              {chargerName}
            </h2>
          </div>

          <button
            type="button"
            aria-label="Close installation requirements"
            onClick={closeDialog}
            className="
              flex
              size-9
              shrink-0
              cursor-pointer
              items-center
              justify-center
              rounded-full
              text-slate-600
              transition
              hover:bg-slate-100
              hover:text-slate-950
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-teal-700
            "
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="size-5"
            >
              <path d="m5 5 10 10M15 5 5 15" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <p id={descriptionId} className="mt-4 text-sm leading-6 text-slate-600">
          A licensed electrician should assess your property before installing
          this charger. Requirements vary depending on your electrical supply,
          switchboard capacity, parking location and cable distance.
        </p>

        <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-sm font-semibold text-slate-900">
            Before requesting a quote
          </h3>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
            <li>
              Confirm whether your property has single-phase or three-phase
              power.
            </li>

            <li>
              Check the distance between the switchboard and the parking space.
            </li>

            <li>
              Identify whether the charger will be installed indoors or
              outdoors.
            </li>

            <li>
              Arrange an electrical assessment for a final installation quote.
            </li>
          </ul>
        </div>

        <p className="mt-4 text-xs leading-5 text-slate-500">
          This guidance does not confirm that your property is compatible with
          this charger.
        </p>

        <button
          type="button"
          onClick={closeDialog}
          className="
            mt-6
            w-full
            cursor-pointer
            rounded-lg
            bg-teal-700
            px-4
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-teal-800
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-teal-700
          "
        >
          Close
        </button>
      </div>
    </dialog>
  );
}
