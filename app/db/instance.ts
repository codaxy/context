import { issues } from './demo-data';
import { Issue } from './model';
import Dexie from 'dexie';
import { ColorMapScope } from 'cx/charts';

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

export const db = new Database();

if (!db.isOpen()) db.open();

db.issues.bulkPut(issues);
