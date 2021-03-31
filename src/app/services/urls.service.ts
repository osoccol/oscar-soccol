import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UrlsService {
    constructor() { }

    getHeaderIconsUrlList(): string[] {
        return [
            '/assets/icons/contrast',
            '/assets/icons/translate',
            '/assets/icons/soundwave',
        ]
    }

    getFlagsIconsUrlList(): string[] {
        return [
            '/assets/flags/en',
            '/assets/flags/es',
            '/assets/flags/fr',
        ]
    }
}