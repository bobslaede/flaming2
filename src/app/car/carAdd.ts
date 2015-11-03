/// <reference path="../../../typings.d.ts" />

import {directive} from 'ng-annotations';
import {CarCtrl} from './carCtrl';
import {CarStore} from './carStore';

@directive()
export class carAdd {
    restrict = 'E';
    controller = CarCtrl;
    controllerAs = 'carCtrl';
    template =
        `<div class="car">
            <form class="form" novalidate name="carform">
                <div class="form-group">
                    <input type="text" name="carCtrl.car.brand" ng-model="carCtrl.car.brand" class="form-control"
                        required placeholder="brand" />
                </div>
                <div class="form-group">
                    <input type="text" name="carCtrl.car.model" ng-model="carCtrl.car.model" class="form-control"
                        required placeholder="model" />
                </div>
                <button class="btn btn-primary" ng-click="carform.$valid && carCtrl.addCar(carCtrl.car)" type="button"
                    ng-disabled="!carform.$valid">{{carCtrl.buttonLabel}}</button>
                <button class="btn btn-warning" ng-click="carCtrl.delCar(carCtrl.car)" type="button"
                    ng-if="carCtrl.car.id">delete</button>
                <button class="btn btn-default" ng-click="carCtrl.goHome()" type="button">back</button>

            </form>
        </div>`;
}

