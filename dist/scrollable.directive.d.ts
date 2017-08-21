import { ElementRef, EventEmitter, Renderer } from '@angular/core';
export declare class NguiScrollableDirective {
    private renderer;
    private platform_id;
    horizontal: boolean;
    elementVisible: EventEmitter<{}>;
    sections: Element[];
    el: HTMLElement;
    visible: any;
    private isBrowser;
    constructor(el: ElementRef, renderer: Renderer, platform_id: any);
    ngAfterViewInit(): void;
    private listenScrollOn(el);
    static scrollTo(selector: string, parentSelector?: string, horizontal?: boolean, distance?: number): void;
}
