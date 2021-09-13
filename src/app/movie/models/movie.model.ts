import { Media } from './../../shared/models/media.model';
export interface Movie extends Media {
    id?: number;
    runtime?: number;
    plot?: string;
    rating?: number;
    onlineId?: string;
    seen?: boolean;
}
