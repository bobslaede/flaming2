/// <reference path="../typings.d.ts" />

import {myApp} from './app/app';
import {Config} from './app/config';
import {homeDir} from './app/home';
import * as user from './app/user/index';
import {Store} from './app/store/store';

var moduleToComponentList = (module) => {
    let keys = Object.keys(module);
    return keys.map(name => module[name]);
}

export let components = [
    myApp,
    Config,
    homeDir,
    moduleToComponentList(user),
    Store
]

