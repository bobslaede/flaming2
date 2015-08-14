/// <reference path="../typings.d.ts" />

import {myApp} from './app/app';
import {Config} from './app/config';
import {Authentication} from './app/authentication/authentication';
import {car} from './app/car/car';
import {CarStore} from './app/car/carStore';
import {Store} from './app/store/store'

export let components = [
    myApp,
    Config,
    Authentication,
    car,
    CarStore,
    Store
]

console.log(components);