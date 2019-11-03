import { Repeater } from 'cx/widgets';
import DashboardWidget from '../DashboardWidget';
import { createFunctionalComponent } from 'cx/ui';
import { useState, useTrigger } from 'cx/hooks';
import { db } from '../../db';

export const SubIssues = createFunctionalComponent(({ width, height }) => {
    let issues = useState();

    useTrigger([], async () => {
        let data = await db.getIssues();
        issues.set(data.filter(f => f.code == '5'));
    });

    return (
        <cx>
            <DashboardWidget width={width} height={height} title="Sub Issues">
                <Repeater records={issues}>
                    <div class="issueitem box_item">
                        <div class="issueitem_name" text-bind="$record.name" />
                        <div class="issueitem_desc">
                            <div ws>
                                <span text-tpl="#{$record.code}" />
                                opened 6 days ago
                            </div>
                            <div ws style="margin-left: auto" visible-expr="!!{$record.assignedTo}">
                                assigned to
                                <strong text-tpl="{$record.assignedTo}" />
                            </div>
                        </div>
                    </div>
                </Repeater>
            </DashboardWidget>
        </cx>
    );
});
