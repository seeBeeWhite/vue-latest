export type CategoryId = "stellage" | "cabinet" | "pedestal" | "desk";
export type FinishId =
  | "white"
  | "oak-sonoma"
  | "concrete-stone"
  | "concrete-light"
  | "concrete-black";

export interface Finish {
  id: FinishId;
  name: string;
  hex: string;
}

export interface Category {
  id: CategoryId;
  name: string;
}

export interface Variant {
  model: string;
  size: string;
}

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  subtitle: string;
  description: string;
  features: string[];
  variants: Variant[];
}

export interface Company {
  legalName: string;
  brand: string;
  unp: string;
  legalAddress: string;
  postAddress: string;
  bank: string;
  bik: string;
  emails: string[];
  phones: string[];
  slogan: string[];
}
