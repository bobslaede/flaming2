/// <reference path="../../typings.d.ts" />
import * as angular from 'angular';

import {AppController} from './AppController';

export let MyApp = angular.module('MyApp', [])
    .directive('myApp', () => {
        return {
            restrict: 'E',
            template: `
                <div>
                    <h1>My App</h1>
                    <hr/>
                    <paper-button raised>
                        {{app.model.button.text}}
                    </paper-button>
                    <hr/>
                </div>
            `,
            controllerAs: 'app',
            controller: AppController
        }
    })