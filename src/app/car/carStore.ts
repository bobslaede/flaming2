/// <reference path="../../../typings.d.ts" />

import {service} from 'ng-annotations';
import {Store} from '../store/store';

@service('carStore')
export class CarStore extends Store{

    constructor() {
        super();
    }

}