/// <reference path="./typings/tsd.d.ts" />


// import for ngPolymerElements;
interface ngPolymerElements {
    name:string;
}
declare var ngPolymerElements:ngPolymerElements;
declare module 'ng-polymer-elements' {
    export = ngPolymerElements
}