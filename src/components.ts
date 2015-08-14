/// <reference path="../typings.d.ts" />

import {MyApp} from './app/app';
import {config} from './app/config';
import {authentication} from './app/authentication/authentication';

export let components = [
    MyApp,
    config,
    authentication
]