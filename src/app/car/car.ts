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
        <form class="form" novalidate name="carform">
            <div class="form-group">
                <input type="text" name="newCar.foo" ng-model="newCar.foo" class="form-control"
                    required />
            </div>
            <button class="btn btn-primary" ng-click="carform.$valid && car.addCar(newCar)" type="button"
                ng-disabled="!carform.$valid">add</button>
        </form>
            <ul>
                <li ng-repeat="c in car.cars">
                    {{c.foo}}
                </li>
            </ul>
    </div>`
}

