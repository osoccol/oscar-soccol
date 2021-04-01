import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AudioService {
    sectionList: string[] = ['INTRO_', 'TECHNOS_', 'EXPERIENCES_', 'PRACTICES_', 'RESPONSIBLE_', 'CONTACT_'];
    constructor() { }

    getAudioSourceList(lang: string): string[] {
        if (lang) {
            let path: string = environment.path + 'assets/audio/';
            let ext: string = '.mp3';
    
            let audioSourceList: string[] = [];
    
            this.sectionList.forEach((section) => {
                audioSourceList.push(path + section + lang.toUpperCase() + ext);
            })
            
            return audioSourceList;
        } else {
            return [];
        }
    }
}