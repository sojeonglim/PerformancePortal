// Type definitions for static site conversion
declare module '@shared/schema' {
  export interface CastMember {
    id: number;
    characterName: string;
    actorName: string;
    quote: string;
    imageUrl: string;
  }
  
  export type InsertCastMember = Omit<CastMember, 'id'>;
}