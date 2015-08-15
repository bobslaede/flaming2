/// <reference path="../../../typings.d.ts" />

import {controller, inject} from 'ng-annotations';
import {CarStore, CarEvents} from './carStore';

@controller()
@inject(CarStore)
export class CarCtrl {

    cars:any[] = []

    constructor(private carStore:CarStore) {

        carStore.on(CarEvents.set, () => {
            this.cars = carStore.get();
        })

        carStore.set([{foo:'bar'}])
    }

    addCar(car) {
        this.carStore.add(car)
    }

}