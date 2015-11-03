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
                template: `<p>Home</p>`
            })

        this.$urlRouterProvider
            .otherwise('home')
    }

}