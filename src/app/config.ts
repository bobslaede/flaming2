/// <reference path="../../typings.d.ts" />

import {config, inject} from 'ng-annotations';

@config()
@inject('$stateProvider', '$urlRouterProvider')
export class Config {

    constructor(
                private $stateProvider:angular.ui.IStateProvider,
                private $urlRouterProvider:angular.ui.IUrlRouterProvider) {

        this.configRoutes();
    }

    configRoutes() {
        this.$stateProvider
            .state('home', {
                url: '/home',
                template: `<home-dir></home-dir>`
            })
            .state('users', {
                url: '/users',
                template: `<user-list></user-list>`
            })
            .state('userEdit', {
                url: '/user/:id',
                template: `<user-view></user-view>`
            })
            .state('adduser', {
                url: '/adduser',
                template: `<user-add></user-add>`
            })

        this.$urlRouterProvider
            .otherwise('home')
    }

}