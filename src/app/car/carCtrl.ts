/// <reference path="../../../typings.d.ts" />

import {controller, inject} from 'ng-annotations';
import {CarStore, CarEvents, CarModel} from './carStore';

interface CarCtrlScope extends ng.IScope {
    newCar:CarModel
}

@controller()
@inject(CarStore, '$scope')
export class CarCtrl {

    cars:any[] = []

    constructor(private carStore:CarStore, private $scope:CarCtrlScope) {

        carStore.on(CarEvents.set, () => {
            this.cars = carStore.get();
        })

    }

    addCar(car) {
        this.carStore.add(car)
        this.$scope.newCar = this.carStore.create();
    }

}