/// <reference path="../../../typings.d.ts" />

import {controller, inject} from 'ng-annotations';
import {CarStore, CarEvents, CarModel} from './carStore';

interface CarCtrlScope extends ng.IScope {
    newCar:CarModel
}

@controller()
@inject(CarStore, '$scope', '$state', '$stateParams')
export class CarCtrl {

    cars:any[] = []
    buttonLabel:string = 'add';

    constructor(private carStore:CarStore,
                private $scope:CarCtrlScope,
                private $state:angular.ui.IStateService,
                private $stateParams:angular.ui.IStateParamsService) {

        this.cars = carStore.get();

        if ($stateParams['id']) {
            let id = $stateParams['id'];
            let car = this.cars.filter(i => i.id == id).pop();
            if (car) {
                this.buttonLabel = 'save';
                this.$scope.newCar = angular.copy(car);
            } else {
                $state.go('list');
            }
        }

        carStore.on(CarEvents.set, () => {
            this.cars = carStore.get();
        })

        carStore.on(CarEvents.add, (item) => {
            $state.go('edit', {id: item.id})
        })
    }

    addCar(car) {
        if (!car.id) {
            this.carStore.add(car)
            this.$scope.newCar = this.carStore.create();
        } else {
            this.carStore.update(car);
        }
    }

}