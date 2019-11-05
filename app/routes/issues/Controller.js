import { db } from '../../db';

export default {
    async onInit() {
        let issueId = this.store.get('$route.issueId');
        let issue = await db.getIssue(issueId);
        this.store.set('$page.issue', issue);
    },
};
