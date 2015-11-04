/// <reference path="../../typings.d.ts" />

import {directive} from 'ng-annotations';

@directive()
export class userList {
    template = `<div>
        MY USER LIST
        <ul><li></li><li></li><li></li><li></li></ul>
    </div>`
}