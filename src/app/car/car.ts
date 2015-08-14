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
            <button class="btn btn-primary" ng-click="car.addCar()" type="button">add</button>
            <ul>
                <li ng-repeat="c in car.cars">
                    {{c.foo}}
                </li>
            </ul>
        </ng-form>
    </div>`
}

export = CarStore