import { DataInterface } from './DataInterface';
import registerPromiseWorker from 'promise-worker/register';
import { Issue } from '../model/model';
import { database } from './database';

registerPromiseWorker(function(message) {
    let { method, args } = message;
    let cb = methods[method];
    if (!cb) throw new Error(`Method ${method} not found.`);
    return cb(...args);
});

const methods: DataInterface = {
    ping(): Promise<string> {
        return Promise.resolve('pong');
    },

    getIssues(): Promise<Issue[]> {
        return database.issues.toArray();
    },
};
