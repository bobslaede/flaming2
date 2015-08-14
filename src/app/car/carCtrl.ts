/// <reference path="../../../typings.d.ts" />

import {controller, inject} from 'ng-annotations';
import {CarStore} from './carStore';

@controller()
@inject(CarStore)
export class CarCtrl {

    constructor(private carStore:CarStore) {
        console.log('car', carStore);
    }

}