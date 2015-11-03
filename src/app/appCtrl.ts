/// <reference path="../../typings.d.ts" />

import {controller} from 'ng-annotations';

@controller()
export class AppCtrl {
    title:string = '';

    constructor() {
        this.title = 'IM AM APP'
    }
}