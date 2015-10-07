/// <reference path="./typings/tsd.d.ts" />


declare module ngAnnotations {
    interface ngAnnotations {
        animation(cssSelector:string)
        attach(source:string, path?:string)
        autobind()
        config()
        constant(name:string, value:any)
        controller(name?:string)
        directive(name?:string)
        factory(name?:string)
        filter(name?:string)
        inject(...injectables:any[])
        provider(name?:string)
        run()
        service(name?:string)
        value(name:string, value:any)
    }

    interface component {
        autodeclare(app:ng.IModule):void
    }
}

declare var ngAnnotations:ngAnnotations.ngAnnotations;

declare module 'ng-annotations' {
    export = ngAnnotations
}