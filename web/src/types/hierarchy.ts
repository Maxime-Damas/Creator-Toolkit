export interface GroupItem {
  id: string;
  name: string;
}

export interface FamilyItem {
  id: string;
  name: string;
  groupId: string | null; // null si racine, sinon id du groupe parent
}

export interface HierarchyData {
  groups: GroupItem[];
  families: FamilyItem[];
}

