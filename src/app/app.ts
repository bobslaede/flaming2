
import angular from 'angular';

var app = angular.module('app', [])
    .directive('myApp', function () {
        return {
            restrict: 'E',
            scope: true,
            template: `<div class="app">
                <paper-button raised>FooBar</paper-button>
            </div>`
        }
    })

export var app = app;