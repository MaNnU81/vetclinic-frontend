import { Vax } from "./vax";

export interface Animal {
      id: number;
  name: string;
  species: string;
  breed?: string | null;
  yob?: number | null;
  ownerName?: string | null;
  img?: string | null;
  vaccines: Vax[];
  vaccinesCount: number;
  createdAt: string;
}
