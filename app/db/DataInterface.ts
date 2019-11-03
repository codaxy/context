import { Issue } from '../model/model';

export interface DataInterface {
    ping(): Promise<string>;
    getIssues(): Promise<Issue[]>;
}
