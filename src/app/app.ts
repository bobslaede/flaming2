/// <reference path="../../typings/tsd.d.ts" />
import * as angular from 'angular';

export let MyApp = angular.module('MyApp', [])
    .directive('myApp', () => {
        return {
            restrict: 'E',
            template: `
                <div>
                    <h1>My App</h1>
                    <nav>
                        <ul>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                        </ul>
                    </nav>
                </div>
            `
        }
    })