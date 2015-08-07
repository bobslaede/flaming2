/// <reference path="../../typings.d.ts" />

interface IButton {
    text:string
}

interface IAppModel {
    button:IButton
}

export class AppController {
    model:IAppModel;

    constructor() {
        this.model = {
            button: {
                text: 'bar button'
            }
        }
    }
}