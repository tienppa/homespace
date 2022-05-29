// interface là một cái khuôn, nó không thay đổi
export interface FilterButton {
  type: Filter;
  label: string;
  isActive: boolean;
}

export enum Filter {
  All,
  Active,
  Completed,
}
