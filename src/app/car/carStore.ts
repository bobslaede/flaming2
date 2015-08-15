/// <reference path="../../../typings.d.ts" />

import {service} from 'ng-annotations';
import {Store, StoreEvents} from '../store/store';

export var CarEvents = StoreEvents;

export interface CarModel {
    brand?:string
    model?:string
    id?:string
}

@service('carStore')
export class CarStore extends Store {

    model:CarModel = {
        brand: '',
        model: ''
    }

    constructor() {
        super();
    }

}