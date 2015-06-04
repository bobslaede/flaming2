/// <reference path="../../typings/tsd.d.ts" />

import * as angular from 'angular'

var foo = angular.module('app', [])
    .directive('myApp', function () {
        return {
            restrict: 'E',
            scope: true,
            template: `<div class="app">
                <paper-button raised>FooBar</paper-button>
            </div>`
        }
    })

export var app = foo;