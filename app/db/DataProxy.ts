import { DataInterface } from './DataInterface';
import PromiseWorker from 'promise-worker';
import Worker from 'worker-loader!./DataWorker';

export function createDbWorker(): DataInterface {
    var promiseWorker = new PromiseWorker(new Worker());

    let proxy = new Proxy(
        {},
        {
            get(target, propKey, receiver) {
                return function(...args) {
                    return promiseWorker.postMessage({
                        method: propKey,
                        args,
                    });
                };
            },
        },
    );

    return proxy as any;
}
