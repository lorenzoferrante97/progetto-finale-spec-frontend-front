import { Category, Platform, GameMode, Theme, Rating } from './subTypes';

// type Videogame
export type Videogame = {
  title: string;
  category: Category;
  platform: Platform[];
  readonly releaseYear: number;
  readonly developer: string;
  readonly rating: Rating;
  readonly coverUrl: string;
  readonly backdropUrl: string;
  description: string;
  readonly gameMode: GameMode[];
  theme: Theme[];
};
