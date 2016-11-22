/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from '../../src/sortable.component';
import * as import2 from '@angular/core/src/linker/view';
export declare class Wrapper_SortableContainer {
    _eventHandler: Function;
    context: import0.SortableContainer;
    _changed: boolean;
    _expr_0: any;
    _expr_1: any;
    _expr_2: any;
    constructor(p0: any, p1: any, p2: any, p3: any, p4: any);
    ngOnDetach(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    check_draggable(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_sortableData(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_dropzones(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    ngDoCheck(view: import2.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import2.AppView<any>, _eventHandler: any): void;
}
export declare class Wrapper_SortableComponent {
    _eventHandler: Function;
    context: import0.SortableComponent;
    _changed: boolean;
    _expr_0: any;
    _expr_1: any;
    _expr_2: any;
    _expr_3: any;
    _expr_4: any;
    _expr_5: any;
    subscription0: any;
    subscription1: any;
    subscription2: any;
    subscription3: any;
    subscription4: any;
    constructor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any);
    ngOnDetach(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    check_index(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_draggable(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_droppable(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_dragData(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_effectallowed(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_effectcursor(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    ngDoCheck(view: import2.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import2.AppView<any>, _eventHandler: any, emit0: boolean, emit1: boolean, emit2: boolean, emit3: boolean, emit4: boolean): void;
}
