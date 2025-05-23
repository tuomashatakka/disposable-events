declare module "Disposable" {
    export default class Disposable {
        disposed: boolean;
        disposalAction: CallableFunction | null;
        /**
         * Ensure that an `object` correctly implements the `Disposable` contract
         *
         * @method isDisposable
         * @param  {Object}     object Any object you want to perform the check against
         * @return {Boolean}    Boolean indicating whether `object` is a valid `Disposable`
         */
        static isDisposable(object: Disposable | unknown): boolean;
        /**
         * Construct a Disposable
         *
         * @method constructor
         * @param  {Function}    disposalAction An action to perform when {::dispose} is called for the first time
         */
        constructor(disposalAction: CallableFunction);
        /**
         * Perform the disposal action, indicating that the resource
         * associated with this disposable is no longer needed. You
         * can call this method more than once, but the disposal action
         * will only be performed the first time
         *
         * @method dispose
         */
        dispose(): void;
    }
    /**
     * Ensure that an `object` correctly implements the `Disposable` contract
     *
     * @method isDisposable
     * @param  {[type]}     object object Any object you want to perform the check against
     * @return {Boolean}    Boolean indicating whether `object` is a valid `Disposable`
     */
    export function isDisposable(object: any): boolean;
}
declare module "DisposableEvent" {
    import Disposable from "Disposable";
    export default class DisposableEvent extends Disposable {
        handler: EventListener | null;
        target: HTMLElement | null;
        type: string;
        /**
         * Initiate a new disposable.
         *
         * Upon initiating the new object, a new handler fired on `type` events
         * will be registered for the element defined by the `target` parameter
         * (efaults to `document`).
         *
         * The event handler will be unbound upon the disposal of this object
         *
         * @method constructor
         */
        constructor({ type, handler, target }: {
            type: string;
            handler: EventListener;
            target: HTMLElement;
        });
    }
}
declare module "DisposableCollection" {
    import Disposable from "Disposable";
    export default class DisposableCollection {
        disposables: Disposable[];
        disposed: boolean;
        /**
         * Construct an instance of `DisposableCollection`
         *
         * @method constructor
         */
        constructor(...args: Disposable[]);
        /**
         * Append any number of disposable objects to the collection
         *
         * @method add
         * @param  {Array} disposables Any number of objects with a disposal action
         */
        add(...disposables: Disposable[]): void;
        /**
         * Remove disposables from the collection
         *
         * @method remove
         * @param  {[type]} disposables Any number of disposables that are added
         *                              to this collection
         */
        remove(...disposables: Disposable[]): void;
        /**
         * Clear the collection from any disposables without firing their
         * disposal actions
         *
         * @method clear
         */
        clear(): void;
        /**
         * Dispose the collection along with all its registered disposables
         * @method dispose
         * @return {[type]} [description]
         */
        dispose(): void;
    }
}
declare module "index" {
    import Disposable from "Disposable";
    import DisposableEvent from "DisposableEvent";
    import DisposableCollection from "DisposableCollection";
    export { Disposable, DisposableCollection, DisposableEvent, };
    const _default: {
        Disposable: typeof Disposable;
        DisposableCollection: typeof DisposableCollection;
        DisposableEvent: typeof DisposableEvent;
    };
    export default _default;
}
