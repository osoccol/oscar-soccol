import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UrlsService {
    constructor() { }

    getHeaderIconsUrlList(): string[] {
        
        return [
            environment.path +'assets/icons/contrast',
            environment.path + 'assets/icons/translate',
            environment.path + 'assets/icons/soundwave',
            environment.path + 'assets/icons/arrow',
        ]
    }

    getFlagsIconsUrlList(): string[] {
        return [
            environment.path + 'assets/flags/en',
            environment.path + 'assets/flags/es',
            environment.path + 'assets/flags/fr',
        ]
    }

    getContactIconsUrlList(): string[] {
        return [
            environment.path + 'assets/icons/linkedin.svg',
            environment.path + 'assets/icons/github.svg',
        ]
    }

    getImagesUrlList(): string[] {
        return [
            environment.path + 'assets/img/ELIS.svg',
            environment.path + 'assets/img/HNgroup.png',
        ]
    }
}