﻿/// <reference path="../../../typings.d.ts" />

import {Store} from './store';

describe('Store', () => {

    it('should be true', () => {
        console.log(Store.$name);
        expect(true).toEqual(true);
    })
})