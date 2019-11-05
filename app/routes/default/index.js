import { BurndownChart } from '../../widgets/burndown-chart';
import { GitHubRecentCommits } from '../../widgets/github-recent-commits';
import { Wiki } from '../../widgets/wiki';
import { SubIssues } from '../../widgets/sub-issues';
import { Todo } from '../../widgets/todo';
import { IssueSidebar } from '../../common/issue-sidebar';
/*

DEAS: 
- move items using arrow keys, resize items with arrow keys + Ctrl
- most widgets should keep data prepared to avoid multiple loading indicators
- system documenting and meta widgets 
- widget map-reduce - widgets in parent boards should easily aggregate data from inner boards
*/

export default (
    <cx>
        <IssueSidebar />
        <div class="app_content overflow-auto">
            <div class="grid">
                <SubIssues width={2} />
                <Todo width={2} />
                <GitHubRecentCommits width={2} />
                <div class="w2">
                    <div class="box_title">Time Entries</div>
                </div>
                <BurndownChart width={2} height={1} />
                <div class="w2">
                    <div class="box_title">Attachments</div>
                </div>

                <Wiki
                    width={2}
                    markdown={`
### Wiki

Wiki can contain instructions in form of long text formatted using Markdown.

#### Supported options

Standard Markdown notation applies for **bold**, *italic*, \`code\`, and ~strikethrough~.

###### Code Blocks

\`\`\`
This is a code snippet
\`\`\`


###### Tables

| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |



            `}
                />

                <div class="w2 h1">
                    <div class="box_title">Image Gallery</div>
                </div>

                <div class="w4 h2">
                    <div class="box_title">Timeline</div>
                </div>
                <div class="box w2">
                    <div class="box_title">Workflow</div>
                    <div class="wiki">
                        <p ws>Define applicable actions at each state. Affects all child items.</p>
                    </div>
                </div>
                <div class="box w2">
                    <div class="box_title">Team & Roles</div>
                    <div class="wiki">
                        <p ws>Permissions defined in this box affect all child items.</p>
                    </div>
                </div>
                <div class="box w2">
                    <div class="box_title">Questions and Answers</div>
                    <div class="wiki">
                        <p ws>Ask questions and get help and instructions from other team members.</p>
                    </div>
                </div>
                <div class="box h2 w2">
                    <div class="box_title">Activity</div>
                </div>

                <div class="box w4 h4">
                    <div class="box_title">Discussion</div>
                </div>
            </div>
        </div>
    </cx>
);
