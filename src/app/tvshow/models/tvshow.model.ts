import { Media } from './../../shared/models/media.model';
export interface TvShow extends Media{
    id?: number;
    onlineId?: string;
    status?: string;
}