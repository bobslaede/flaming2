/// <reference path="../typings.d.ts" />

import * as angular from 'angular';
import {MyApp} from 'app/app';

import * as ngPolymerElements from 'ng-polymer-elements';

angular.bootstrap(document.documentElement, [ngPolymerElements.name, MyApp.name])
