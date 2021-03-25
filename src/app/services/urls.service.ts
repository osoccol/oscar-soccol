import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UrlsService {
    constructor() { }

    getHeaderIconsUrls(): string[] {
        return [
            '../../assets/icons/contrast',
            '../../assets/icons/translate',
            '../../assets/icons/soundwave',
        ]
    }
}