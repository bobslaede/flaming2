/// <reference path="../../../typings.d.ts" />

import {directive} from 'ng-annotations';
import {CarCtrl} from './carCtrl';
import {CarStore} from './carStore';

@directive()
export class carList {
    restrict = 'E'
    controller = CarCtrl
    controllerAs = 'carCtrl'
    template =
        `<div class="car">
            <ul class="list-unstyled">
                <li ng-repeat="c in carCtrl.cars track by c.id">
                    <a ui-sref="edit({id: c.id})">{{c.brand}} {{c.model}}</a>
                </li>
            </ul>
        </div>`
}

