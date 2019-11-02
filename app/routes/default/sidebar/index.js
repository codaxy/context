import { List, TextField } from 'cx/widgets';
import { KeySelection } from 'cx/ui';

const demoData = [
    {
        id: 1,
        name: 'Widgets',
        reporter: { handle: 'mstijak' },
        assignedTo: { handle: 'mstijak' },
    },
    {
        id: 2,
        name: 'Documentation',
    },
    {
        id: 3,
        name: 'Demo Apps',
    },
];

export default (
    <cx>
        <aside class="app_sidebar p2" style="width: 400px">
            <TextField value-bind="$page.search" placeholder="Search" class="w100 mb2" />

            <List
                records={demoData}
                itemPad={false}
                selection={{ bind: '$page.issueId', type: KeySelection }}
                mod="bordered"
            >
                <div class="issueitem">
                    <div class="issueitem_name" text-bind="$record.name" />
                    <div class="issueitem_desc">
                        <div ws>
                            <span text-tpl="#{$record.id}" />
                            opened 6 days ago
                        </div>
                        <div ws style="margin-left: auto" visible-expr="!!{$record.assignedTo.handle}">
                            assigned to
                            <strong text-tpl="{$record.assignedTo.handle}" />
                        </div>
                    </div>
                </div>
            </List>
        </aside>
    </cx>
);
