import angular from 'angular/angular'

import {App} from 'app/app'

export class Foo {
    foo:string;

    constructor() {
        this.foo = 'bar';
    }
}

var app = new App();

var a = [1, 2].map(x => x * 2);

console.log(angular);