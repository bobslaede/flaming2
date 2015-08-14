/// <reference path="./typings/tsd.d.ts" />


declare module ngAnnotations {
    interface ngAnnotations {
        animation()
        attach()
        autobind()
        config()
        constant()
        controller(name?:string)
        directive(name:string)
        factory()
        filter()
        inject(...injectables:any[])
        provider()
        run()
        service()
        value()
    }

    interface component {
        autodeclare(app:ng.IModule):void
    }
}

declare var ngAnnotations:ngAnnotations.ngAnnotations;

declare module 'ng-annotations' {
    export = ngAnnotations
}