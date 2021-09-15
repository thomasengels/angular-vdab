import { Media } from './../../shared/models/media.model';
export interface TvShow extends Media{
    id?: number;
    onlineId?: string;
    status?: string;
}

export interface CreateTvShow {
    title: string;
    year: number;
    runtime: number;
    seasons: number;
    episodes: number;
    overview: string;
    posterUrl: string;
  }