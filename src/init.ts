/// <reference path="../typings/tsd.d.ts" />

import * as angular from 'angular'

import {app} from './app/app.ts'

angular.bootstrap(document.documentElement, [app.name])

console.log(app, angular);