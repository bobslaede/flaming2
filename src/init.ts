/// <reference path="../typings.d.ts" />

import * as angular from 'angular';
import {components} from './components';
import 'angular-ui-router';

let app = angular.module('app', ['ui.router']);

components.forEach((component:any) => <any>component.autodeclare(app));

angular.bootstrap(document.documentElement, [app.name]);

export default app;
