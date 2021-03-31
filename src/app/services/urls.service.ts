import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UrlsService {
    constructor() { }

    getHeaderIconsUrlList(): string[] {
        return [
            '/oscar-soccol/assets/icons/contrast',
            'oscar-soccol/assets/icons/translate',
            '/assets/icons/soundwave',
        ]
    }

    getFlagsIconsUrlList(): string[] {
        return [
            'oscar-soccol/assets/flags/en',
            '/oscar-socccol/assets/flags/es',
            '/assets/flags/fr',
        ]
    }
}
