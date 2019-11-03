import { issues } from './data/demo-data';
import { Issue } from '../model/model';
import Dexie from 'dexie';
import { fetchGHIssues } from './data/gh-data';

class Database extends Dexie {
    // Declare implicit table properties.
    // (just to inform Typescript. Instanciated by Dexie in stores() method)

    issues: Dexie.Table<Issue, string>; // number = type of the primkey
    //...other tables goes here...

    constructor() {
        //TODO: Figure out user authentication
        super('context');

        this.version(1).stores({
            issues: 'id, name',
            //...other tables goes here...
        });
        // The following line is needed if your typescript
        // is compiled using babel instead of tsc:
        this.issues = this.table('issues');
    }
}

export const database = new Database();

if (!database.isOpen()) database.open();

//database.issues.bulkPut(issues);

async function importIssues() {
    let count = await database.issues.count();
    if (count > 0) return;

    let ghIssues = await fetchGHIssues();
    let data: Issue[] = ghIssues
        .filter(i => i.title)
        .map(issue => ({
            id: String(issue.id),
            code: String(issue.number),
            name: issue.title,
            reporter: issue.user.login,
            reportTime: Date.parse(issue.created_at),
            type: 'task' as any,
        }));
    console.log('Imported GH data', data);
    database.issues.bulkPut(data);
}

importIssues();
