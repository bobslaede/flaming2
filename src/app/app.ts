/// <reference path="../../typings.d.ts" />
import * as angular from 'angular';

interface IButton {
    text:string
}

interface IAppModel {
    button:IButton
}

export class MyAppController {
    model:IAppModel;

    constructor() {
        this.model = {
            button: {
                text: 'bar button'
            }
        }
    }
}

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
            controller: MyAppController
        }
    })