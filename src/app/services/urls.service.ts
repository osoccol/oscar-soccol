import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UrlsService {
    constructor() { }

    getHeaderIconsUrlList(): string[] {
        
        return [
            environment.path +'/assets/icons/contrast',
            environment.path + '/assets/icons/translate',
            environment.path + '/assets/icons/soundwave',
        ]
    }

    getFlagsIconsUrlList(): string[] {
        return [
            environment.path + '/assets/flags/en',
            environment.path + '/assets/flags/es',
            environment.path + '/assets/flags/fr',
        ]
    }
}