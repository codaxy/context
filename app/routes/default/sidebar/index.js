import { List, TextField } from 'cx/widgets';
import { KeySelection, createFunctionalComponent } from 'cx/ui';
import { getModel } from './model';

export default createFunctionalComponent(() => {
    const { issues } = getModel();

    return (
        <cx>
            <aside class="app_sidebar p2" style="width: 400px">
                <TextField value-bind="$page.search" placeholder="Search" class="w100 mb2" />

                <List
                    records={issues}
                    itemPad={false}
                    selection={{ bind: '$page.issueId', type: KeySelection }}
                    mod="bordered"
                >
                    <div class="issueitem">
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
                </List>
            </aside>
        </cx>
    );
});
