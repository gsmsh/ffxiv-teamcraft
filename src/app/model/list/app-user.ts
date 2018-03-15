import {DataModel} from '../../core/database/storage/data-model';

export class AppUser extends DataModel {
    name?: string;
    email?: string;
    masterbooks?: number[];
    lodestoneId?: number;
    avatar?: string;
    favorites?: string[];
    favoriteWorkshops?: string[];
    patron?: boolean;
    anonymous?: boolean;
    providerId?: string;
    patreonEmail?: string;
    admin?:boolean;
}
