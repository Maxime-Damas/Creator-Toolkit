export interface PropCoords {
  x: number;
  y: number;
  z: number;
}

export interface PropRotation {
  x: number;
  y: number;
  z: number;
}

export interface PropItem {
  id: string;
  creator?: string;
  model: string;
  label?: string;
  coords: PropCoords;
  rotation: PropRotation;
  heading?: number;
  renderDistance: number;
  textureVariation: number;
  collision: boolean;
  lockedBy?: {
    ownerSrc: number;
    ownerName: string;
  } | null;
  bucket?: number;
  opacity?: number;
  scale?: number;
  physics?: boolean;
  groupId?: string | null;
  familyId?: string | null;
  group?: string | null;
}

export interface CatalogProp {
  model: string;
  label: string;
  category: string;
  preview?: string;
  offsetZ?: number;
}

export interface LockInfo {
  ownerSrc: number;
  ownerName: string;
}

export interface AssemblagePropData {
  model: string;
  label?: string;
  relCoords: PropCoords;
  rotation: PropRotation;
  heading: number;
  renderDistance?: number;
  textureVariation?: number;
  collision?: boolean;
  opacity?: number;
  scale?: number;
  physics?: boolean;
  metadata?: Record<string, any>;
}

export interface AssemblageItem {
  id: string;
  name: string;
  category: string;
  description?: string;
  thumbnail?: string;
  propsCount: number;
  propsData: AssemblagePropData[];
  createdAt?: string;
  updatedAt?: string;
}

