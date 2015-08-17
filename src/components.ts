/// <reference path="../typings.d.ts" />

import {myApp} from './app/app';
import {Config} from './app/config';
import {Authentication} from './app/authentication/authentication';
import {carList} from './app/car/car';
import {carAdd} from './app/car/carAdd';
import {CarStore} from './app/car/carStore';
import {Store} from './app/store/store'

export let components = [
    myApp,
    Config,
    Authentication,
    carList,
    carAdd,
    CarStore,
    Store
]

