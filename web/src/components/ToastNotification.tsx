import React from 'react';
import { useLightStore } from '../store/useLightStore';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

export const ToastNotification: React.FC = () => {
  const { toast } = useLightStore();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-3.5 h-3.5 text-hud-success" />,
    error: <AlertCircle className="w-3.5 h-3.5 text-hud-error" />,
    info: <Info className="w-3.5 h-3.5 text-hud-accent" />,
  };

  const borderClasses = {
    success: 'border-l-2 border-l-hud-success',
    error: 'border-l-2 border-l-hud-error',
    info: 'border-l-2 border-l-hud-accent',
  };

  return (
    <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-in fade-in duration-150">
      <div
        className={`flex items-center gap-2 px-3 py-1.5 rounded bg-hud-panel border border-hud-border ${borderClasses[toast.type]} shadow-md text-xs font-medium text-hud-text`}
      >
        {icons[toast.type]}
        <span>{toast.message}</span>
      </div>
    </div>
  );
};
