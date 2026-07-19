'use client';

import { useId, useState } from 'react';

import { InstallationRequirementsDialog } from './InstallationRequirementsDialog';

type CardActionsProps = {
  chargerName: string;
};

export function CardActions({ chargerName }: CardActionsProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogId = useId();

  return (
    <div className="border-t border-slate-200 px-6 py-5">
      <button
        type="button"
        aria-label={`View installation requirements for ${chargerName}`}
        aria-haspopup="dialog"
        aria-expanded={isDialogOpen}
        aria-controls={dialogId}
        onClick={() => setIsDialogOpen(true)}
        className="
          w-full
          cursor-pointer
          rounded-lg
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
        View installation requirements
      </button>

      <InstallationRequirementsDialog
        id={dialogId}
        chargerName={chargerName}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}
