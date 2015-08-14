/// <reference path="../typings.d.ts" />

import * as angular from 'angular';
import {components} from './components';

let app = angular.module('app', []);

components.forEach((component:any) => <any>component.autodeclare(app));

angular.bootstrap(document.documentElement, [app.name])
