import { db } from '../../db';
import { useStoreMethods, useTrigger, ref } from 'cx/hooks';
import { History } from 'cx/ui';

export function getModel() {
    let { ref: storeRef, get } = useStoreMethods();
    let issues = storeRef('issueSidebar.issues');
    let selectedIssueId = storeRef('issueSidebar.selectedIssueId', get('$route.issueId'));

    useTrigger([], async () => {
        let data = await db.getIssues();
        issues.set(data);
    });

    useTrigger(['issueSidebar.selectedIssueId'], issueId => {
        if (issueId && issueId != get('$route.issueId')) History.pushState({}, null, `~/issues/${issueId}`);
    });

    return {
        issues,
        selectedIssueId,
    };
}
