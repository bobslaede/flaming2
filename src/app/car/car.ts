/// <reference path="../../../typings.d.ts" />

import {directive} from 'ng-annotations';
import {CarCtrl} from './carCtrl';
import {CarStore} from './carStore';

@directive()
export class car {
    restrict = 'E'
    controller = CarCtrl
    controllerAs = 'car'
    template = `<div class="car">
        <ng-form>
            CAR
        </ng-form>
    </div>`
}

export = CarStore