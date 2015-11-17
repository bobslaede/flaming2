/// <reference path="../../../typings.d.ts" />

import {controller, inject} from 'ng-annotations';
import {UserStore, UserEvents, UserModel} from './userStore';

@controller()
@inject(UserStore, '$stateParams', '$state')
export class UserCtrl {

    users:UserModel[]
    user:UserModel

    constructor(private userStore:UserStore,
                private $stateParams:angular.ui.IStateParamsService,
                private $state:angular.ui.IStateService) {
        this.users = this.userStore.get();

        this.userStore.on(UserEvents.set, () => {
            this.users = this.userStore.get();
        })

        this.userStore.on(UserEvents.add, (user) => {
            this.$state.go('userEdit', {id: user.id })
        })

        this.userStore.on(UserEvents.remove, () => {
            this.$state.go('users')
        })

        if ($stateParams['id']) {
            this.user = this.userStore.getById($stateParams['id']);
            console.log(this.user);
        }
    }

    remove(user) {
        this.userStore.remove(user);
    }

    save(user) {
        this.userStore.update(user);
    }

    add(userName) {

        let user:UserModel = <UserModel>this.userStore.create();
        user.name = userName;
        this.userStore.add(user);
    }

}