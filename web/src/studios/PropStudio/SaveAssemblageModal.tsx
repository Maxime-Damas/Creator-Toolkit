import React, { useState, useEffect } from 'react';
import { usePropStore } from '../../store/usePropStore';
import { Layers, X, Save, Sparkles, Box, AlertCircle } from 'lucide-react';

const POPULAR_CATEGORIES = [
  'Général',
  'Bar',
  'Salon',
  'Chantier',
  'Bureau',
  'Médical',
  'Stockage',
  'Extérieur',
];

export const SaveAssemblageModal: React.FC = () => {
  const {
    assemblageModalOpen,
    assemblageModalFamilyId,
    editingAssemblage,
    closeSaveAssemblageModal,
    saveFamilyAsAssemblage,
    updateAssemblageMetadata,
    families,
    props,
  } = usePropStore();

  const family = families.find((f) => f.id === assemblageModalFamilyId);
  const familyProps = Object.values(props).filter(
    (p) =>
      p.familyId === assemblageModalFamilyId ||
      (p.group === assemblageModalFamilyId && !p.familyId)
  );

  const [name, setName] = useState('');
  const [category, setCategory] = useState('Général');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmUpdateComposition, setConfirmUpdateComposition] = useState(false);

  useEffect(() => {
    if (editingAssemblage) {
      setName(editingAssemblage.name);
      setCategory(editingAssemblage.category || 'Général');
      setDescription(editingAssemblage.description || '');
    } else if (family) {
      setName(family.name);
      setCategory('Général');
      setDescription('');
    }
  }, [editingAssemblage, family, assemblageModalOpen]);

  if (!assemblageModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);
    try {
      if (editingAssemblage && !assemblageModalFamilyId) {
        // Simple mise à jour des métadonnées
        await updateAssemblageMetadata(editingAssemblage.id, {
          name: name.trim(),
          category: category.trim() || 'Général',
          description: description.trim(),
        });
        closeSaveAssemblageModal();
      } else if (assemblageModalFamilyId) {
        // Enregistrement d'une famille comme assemblage (nouveau ou mise à jour avec confirmation)
        await saveFamilyAsAssemblage({
          familyId: assemblageModalFamilyId,
          name: name.trim(),
          category: category.trim() || 'Général',
          description: description.trim(),
          id: editingAssemblage?.id,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="w-full max-w-lg bg-hud-panel border border-hud-border rounded-xl shadow-2xl overflow-hidden flex flex-col">
        {/* En-tête */}
        <div className="p-4 border-b border-hud-border flex items-center justify-between bg-hud-surface/40">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-hud-text flex items-center gap-2">
                <span>
                  {editingAssemblage
                    ? "Modifier l'Assemblage"
                    : 'Enregistrer comme Assemblage (Préfab)'}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 text-[10px] font-semibold border border-amber-500/20">
                  {familyProps.length || editingAssemblage?.propsCount || 0} props
                </span>
              </h2>
              <p className="text-[11px] text-hud-muted">
                Créez un modèle réutilisable à volonté dans le catalogue de props.
              </p>
            </div>
          </div>
          <button
            onClick={closeSaveAssemblageModal}
            className="w-7 h-7 rounded-lg hover:bg-hud-surface text-hud-muted hover:text-hud-text flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Corps du Formulaire */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* 1. Nom */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-hud-text mb-1">
              Nom de l'assemblage <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Comptoir de Bar Complet, Salon Moderne..."
              className="w-full h-8 px-3 bg-hud-surface border border-hud-border rounded-lg text-xs text-hud-text placeholder:text-hud-muted/60 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* 2. Catégorie personnalisée */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-hud-text mb-1">
              Catégorie personnalisée
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Ex: Bar, Salon, Chantier..."
              className="w-full h-8 px-3 bg-hud-surface border border-hud-border rounded-lg text-xs text-hud-text placeholder:text-hud-muted/60 focus:outline-none focus:border-amber-500 mb-1.5"
            />
            {/* Suggestions rapides */}
            <div className="flex flex-wrap gap-1">
              {POPULAR_CATEGORIES.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors ${
                    category === cat
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'bg-hud-surface hover:bg-hud-surface/80 text-hud-muted hover:text-hud-text border border-hud-border'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Description facultative */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-hud-text mb-1">
              Description <span className="text-hud-muted/60 font-normal lowercase">(facultative)</span>
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Détails sur la composition, utilisation recommandée..."
              className="w-full p-2 bg-hud-surface border border-hud-border rounded-lg text-xs text-hud-text placeholder:text-hud-muted/60 focus:outline-none focus:border-amber-500 resize-none"
            />
          </div>

          {/* 4. Aperçu des props inclus */}
          {familyProps.length > 0 && (
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-hud-text mb-1.5">
                Props inclus ({familyProps.length})
              </span>
              <div className="max-h-28 overflow-y-auto space-y-1 p-2 rounded-lg bg-hud-bg/60 border border-hud-border/70 scrollbar-thin scrollbar-thumb-hud-borderLight">
                {familyProps.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center justify-between text-xs py-0.5 px-1 rounded hover:bg-hud-surface/60"
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <Box className="w-3.5 h-3.5 text-hud-accent shrink-0" />
                      <span className="font-medium text-hud-text truncate">
                        {p.label || p.model}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-hud-muted truncate ml-2">
                      {p.model}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Message de garantie d'indépendance */}
          <div className="p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/20 text-[11px] text-amber-200/90 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>
              L'enregistrement crée une copie autonome. Votre famille actuelle et ses objets ne seront ni modifiés ni supprimés.
            </span>
          </div>

          {/* Confirmation si mise à jour d'un assemblage existant */}
          {editingAssemblage && assemblageModalFamilyId && (
            <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/30 text-[11px] text-red-200 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-semibold block">Remplacement de la composition existante</span>
                <p className="text-[10px] opacity-80">
                  Cette action remplacera les objets sauvegardés dans cet assemblage par la composition actuelle de la famille.
                </p>
                <label className="flex items-center gap-1.5 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={confirmUpdateComposition}
                    onChange={(e) => setConfirmUpdateComposition(e.target.checked)}
                    className="rounded border-hud-border"
                  />
                  <span className="text-[10px] font-bold text-white">
                    Confirmer le remplacement de la composition
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* Boutons d'Action */}
          <div className="pt-2 border-t border-hud-border flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={closeSaveAssemblageModal}
              className="px-3 h-8 rounded-lg bg-hud-surface hover:bg-hud-surface/80 border border-hud-border text-xs text-hud-muted hover:text-hud-text transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={Boolean(
                isSubmitting ||
                !name.trim() ||
                (editingAssemblage && assemblageModalFamilyId && !confirmUpdateComposition)
              )}
              className="px-4 h-8 rounded-lg bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:pointer-events-none text-xs font-bold text-black flex items-center gap-1.5 transition-colors shadow-md"
            >
              <Save className="w-3.5 h-3.5" />
              <span>
                {isSubmitting
                  ? 'Enregistrement...'
                  : editingAssemblage
                  ? "Mettre à jour l'Assemblage"
                  : "Enregistrer l'Assemblage"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
