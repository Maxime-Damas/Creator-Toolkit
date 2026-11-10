import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useLightStore } from '../store/useLightStore';
import { RotateCcw, Copy, Check } from 'lucide-react';
import { rgbToHex, hexToRgb } from '../utils/colorUtils';

export const ColorPicker: React.FC = () => {
  const { rgb, setRgb, recentColors, addRecentColor, showToast } = useLightStore();

  const currentHex = rgbToHex(rgb.r, rgb.g, rgb.b);
  const currentHexRef = useRef(currentHex);
  currentHexRef.current = currentHex;

  const [hexInput, setHexInput] = useState(currentHex);
  const [copied, setCopied] = useState(false);

  // Position 2D (x: 0-1, y: 0-1) et Curseur Vertical (0-1)
  const [pickerPos, setPickerPos] = useState({ x: 0.15, y: 0.15 });
  const [verticalVal, setVerticalVal] = useState(0.85);

  const spectrumRef = useRef<HTMLDivElement | null>(null);
  const verticalSliderRef = useRef<HTMLDivElement | null>(null);

  const isDragging2D = useRef(false);
  const isDraggingVertical = useRef(false);

  useEffect(() => {
    setHexInput(rgbToHex(rgb.r, rgb.g, rgb.b));
  }, [rgb]);

  const computeColorFromCoords = useCallback((nx: number, ny: number, vFactor: number) => {
    const hue = nx * 360;
    const sat = Math.max(0, Math.min(1, 1 - ny * 0.15));
    const val = Math.max(0, Math.min(1, (1 - ny) * vFactor));

    const c = val * sat;
    const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
    const m = val - c;

    let r1 = 0, g1 = 0, b1 = 0;
    if (hue >= 0 && hue < 60) { r1 = c; g1 = x; b1 = 0; }
    else if (hue >= 60 && hue < 120) { r1 = x; g1 = c; b1 = 0; }
    else if (hue >= 120 && hue < 180) { r1 = 0; g1 = c; b1 = x; }
    else if (hue >= 180 && hue < 240) { r1 = 0; g1 = x; b1 = c; }
    else if (hue >= 240 && hue < 300) { r1 = x; g1 = 0; b1 = c; }
    else { r1 = c; g1 = 0; b1 = x; }

    return {
      r: Math.round((r1 + m) * 255),
      g: Math.round((g1 + m) * 255),
      b: Math.round((b1 + m) * 255),
    };
  }, []);

  const handleSpectrumMove = useCallback((clientX: number, clientY: number) => {
    if (!spectrumRef.current) return;
    const rect = spectrumRef.current.getBoundingClientRect();
    const nx = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const ny = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));

    setPickerPos({ x: nx, y: ny });
    const newRgb = computeColorFromCoords(nx, ny, verticalVal);
    setRgb(newRgb);
  }, [computeColorFromCoords, verticalVal, setRgb]);

  const handleVerticalMove = useCallback((clientY: number) => {
    if (!verticalSliderRef.current) return;
    const rect = verticalSliderRef.current.getBoundingClientRect();
    const ny = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
    const factor = Math.max(0.05, 1 - ny);

    setVerticalVal(factor);
    const newRgb = computeColorFromCoords(pickerPos.x, pickerPos.y, factor);
    setRgb(newRgb);
  }, [computeColorFromCoords, pickerPos, setRgb]);

  useEffect(() => {
    const handleGlobalPointerMove = (e: PointerEvent) => {
      if (isDragging2D.current) {
        handleSpectrumMove(e.clientX, e.clientY);
      }
      if (isDraggingVertical.current) {
        handleVerticalMove(e.clientY);
      }
    };

    const handleGlobalPointerUp = () => {
      if (isDragging2D.current || isDraggingVertical.current) {
        isDragging2D.current = false;
        isDraggingVertical.current = false;
        if (currentHexRef.current) {
          addRecentColor(currentHexRef.current);
        }
      }
    };

    window.addEventListener('pointermove', handleGlobalPointerMove);
    window.addEventListener('pointerup', handleGlobalPointerUp);

    return () => {
      window.removeEventListener('pointermove', handleGlobalPointerMove);
      window.removeEventListener('pointerup', handleGlobalPointerUp);
    };
  }, [handleSpectrumMove, handleVerticalMove, addRecentColor]);

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith('#') && val.length > 0) {
      val = '#' + val;
    }
    setHexInput(val);
    const parsed = hexToRgb(val);
    if (parsed) {
      setRgb(parsed);
      if (val.length === 7) {
        addRecentColor(val);
      }
    }
  };

  const handleHexBlur = () => {
    const parsed = hexToRgb(hexInput);
    if (parsed) {
      addRecentColor(hexInput);
    } else {
      setHexInput(currentHex);
    }
  };

  const handleSelectColorClick = () => {
    addRecentColor(currentHex);
    showToast(`Couleur ${currentHex.toUpperCase()} mémorisée`, 'info');
  };

  const handleCopyHex = () => {
    navigator.clipboard?.writeText(currentHex);
    setCopied(true);
    showToast(`Code couleur ${currentHex} copié`, 'info');
    setTimeout(() => setCopied(false), 1400);
  };

  const handleClear = () => {
    const defaultColor = { r: 255, g: 180, b: 60 };
    setRgb(defaultColor);
    setPickerPos({ x: 0.1, y: 0.1 });
    setVerticalVal(0.9);
    addRecentColor(rgbToHex(defaultColor.r, defaultColor.g, defaultColor.b));
  };

  const handleSelectPreset = (presetHex: string) => {
    const parsed = hexToRgb(presetHex);
    if (parsed) {
      setRgb(parsed);
      addRecentColor(presetHex);
    }
  };

  return (
    <div className="flex flex-col gap-2 select-none">
      {/* Ligne de contrôle principale */}
      <div className="flex items-center gap-1.5">
        {/* Aperçu couleur + "Select Color" */}
        <button
          onClick={handleSelectColorClick}
          title="Valider et mémoriser cette nuance"
          className="flex-1 h-7 px-2 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border flex items-center gap-2 transition-colors text-left"
        >
          <div
            className="w-3.5 h-3.5 rounded-sm border border-hud-border shrink-0"
            style={{ backgroundColor: currentHex }}
          />
          <span className="text-xs font-medium text-hud-text">
            Select Color
          </span>
        </button>

        {/* Code Hexadécimal */}
        <div className="relative flex items-center">
          <input
            type="text"
            value={hexInput}
            onChange={handleHexChange}
            onBlur={handleHexBlur}
            maxLength={7}
            className="w-20 h-7 px-1.5 text-center bg-hud-surface border border-hud-border rounded text-xs font-mono text-hud-text uppercase focus:outline-none focus:border-hud-accent"
            placeholder="#EF4352"
          />
          <button
            onClick={handleCopyHex}
            title="Copier le code HEX"
            className="absolute right-1 text-hud-muted hover:text-hud-text p-0.5"
          >
            {copied ? <Check className="w-3 h-3 text-hud-success" /> : <Copy className="w-3 h-3" />}
          </button>
        </div>

        {/* Bouton Réinitialiser */}
        <button
          onClick={handleClear}
          title="Réinitialiser par défaut"
          className="h-7 px-2 flex items-center gap-1 rounded bg-hud-surface hover:bg-hud-surfaceHover border border-hud-border text-xs text-hud-muted hover:text-hud-text transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Clear</span>
        </button>
      </div>

      {/* Pavé 2D + Curseur vertical */}
      <div className="flex gap-1.5 h-36">
        {/* Pavé 2D */}
        <div
          ref={spectrumRef}
          onPointerDown={(e) => {
            isDragging2D.current = true;
            handleSpectrumMove(e.clientX, e.clientY);
          }}
          className="flex-1 relative rounded border border-hud-border overflow-hidden cursor-crosshair"
          style={{
            background: `
              linear-gradient(to bottom, transparent 0%, #000000 100%),
              linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)
            `,
          }}
        >
          {/* Curseur circulaire 2D */}
          <div
            className="absolute w-3.5 h-3.5 rounded-full border border-white pointer-events-none -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${pickerPos.x * 100}%`,
              top: `${pickerPos.y * 100}%`,
              backgroundColor: currentHex,
              boxShadow: '0 0 0 1px rgba(0,0,0,0.5)',
            }}
          />
        </div>

        {/* Curseur Vertical */}
        <div
          ref={verticalSliderRef}
          onPointerDown={(e) => {
            isDraggingVertical.current = true;
            handleVerticalMove(e.clientY);
          }}
          className="w-5 relative rounded border border-hud-border overflow-hidden cursor-pointer"
          style={{
            background: `linear-gradient(to bottom, ${currentHex} 0%, rgba(255,255,255,0.7) 50%, #ffffff 100%)`,
          }}
        >
          {/* Poignée coulissante */}
          <div
            className="absolute left-0 right-0 h-2 -translate-y-1/2 rounded-sm border border-white pointer-events-none"
            style={{
              top: `${(1 - verticalVal) * 100}%`,
              backgroundColor: currentHex,
              boxShadow: '0 0 0 1px rgba(0,0,0,0.5)',
            }}
          />
        </div>
      </div>

      {/* Rangée des 8 couleurs récentes */}
      <div className="pt-0.5">
        <div className="grid grid-cols-8 gap-1">
          {recentColors.map((hex, idx) => {
            const isSelected = hex.toLowerCase() === currentHex.toLowerCase();
            return (
              <button
                key={`${hex}-${idx}`}
                onClick={() => handleSelectPreset(hex)}
                title={`Appliquer ${hex}`}
                className={`h-5 rounded-sm border transition-colors ${
                  isSelected
                    ? 'border-hud-accent ring-1 ring-hud-accent'
                    : 'border-hud-border hover:border-hud-borderLight'
                }`}
                style={{ backgroundColor: hex }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
