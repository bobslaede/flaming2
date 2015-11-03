/// <reference path="../../../typings.d.ts" />

import {controller, inject} from 'ng-annotations';
import {CarStore, CarEvents, CarModel} from './carStore';

@controller()
@inject(CarStore, '$state', '$stateParams')
export class CarCtrl {

    cars:CarModel[] = [];
    car:CarModel;
    buttonLabel:string = 'add';

    constructor(private carStore:CarStore,
                private $state:angular.ui.IStateService,
                private $stateParams:angular.ui.IStateParamsService) {

        this.cars = carStore.get();

        if ($stateParams['id']) {
            let id = $stateParams['id'];
            let car = this.carStore.getById(id);
            if (car) {
                this.buttonLabel = 'save';
                this.car = car;
            } else {
                $state.go('list');
            }
        }

        carStore.on(CarEvents.set, () => {
            this.cars = carStore.get();
        });

        carStore.on(CarEvents.remove, () => {
            $state.go('list')
        });

        carStore.on(CarEvents.add, (item) => {
            $state.go('edit', { id: item.id })
        });
    }

    goHome() {
        this.$state.go('list');
    }

    delCar(car) {
        if (car.id) {
            this.carStore.remove(car);
        }
    }

    addCar(car) {
        if (!car.id) {
            this.carStore.add(car);
            this.car = this.carStore.create();
        } else {
            this.carStore.update(car);
        }
    }

}