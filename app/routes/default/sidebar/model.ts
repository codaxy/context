import { db } from '../../../db';
import { useStoreMethods, useTrigger } from 'cx/hooks';

export function getModel() {
    let { ref } = useStoreMethods();
    let issues = ref('$page.issues');

    useTrigger([], async () => {
        let data = await db.getIssues();
        issues.set(data);
    });

    return {
        issues,
    };
}
