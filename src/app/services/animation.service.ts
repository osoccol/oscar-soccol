import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AnimationService {
    constructor() { }

    setAnimation(elementId: string, animationClassName: string, scrollTop: number) {
        let element = document.getElementById(elementId);
        if (element) {
            if (!element.classList.contains(animationClassName)) {
                let elementOffset = element.offsetTop; // elements upper part
                let downHeight = scrollTop + window.innerHeight; // position of window bottom
                if (downHeight >= elementOffset) {
                    element.classList.add(animationClassName);
                }
            }
        }
    }
}