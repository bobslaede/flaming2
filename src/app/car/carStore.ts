/// <reference path="../../../typings.d.ts" />

import {service} from 'ng-annotations';
import {Store, StoreEvents} from '../store/store';

export var CarEvents = StoreEvents;

@service('carStore')
export class CarStore extends Store{

    constructor() {
        super();
    }

}