import { db } from '../../../db/instance';
import { useStoreMethods, useTrigger } from 'cx/hooks';

export function getModel() {
    let { get, set, ref } = useStoreMethods();
    let issues = ref('$page.issues');

    useTrigger([], async () => {
        let data = await db.issues.toArray();
        issues.set(data);
    });

    return {
        issues,
    };
}
