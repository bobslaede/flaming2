/// <reference path="../../../typings.d.ts" />

import {directive} from 'ng-annotations';
import {CarCtrl} from './carCtrl';
import {CarStore} from './carStore';

@directive()
export class car {
    restrict = 'E'
    controller = CarCtrl
    controllerAs = 'car'
    template =
        `<div class="car">
            <form class="form" novalidate name="carform">
                <div class="form-group">
                    <input type="text" name="newCar.brand" ng-model="newCar.brand" class="form-control"
                        required placeholder="brand" />
                </div>
                <div class="form-group">
                    <input type="text" name="newCar.model" ng-model="newCar.model" class="form-control"
                        required placeholder="model" />
                </div>
                <button class="btn btn-primary" ng-click="carform.$valid && car.addCar(newCar)" type="button"
                    ng-disabled="!carform.$valid">add</button>
            </form>
            <ul class="list-unstyled">
                <li ng-repeat="c in car.cars">
                    {{c.brand}} {{c.model}} ({{c.id}})
                </li>
            </ul>
        </div>`
}

