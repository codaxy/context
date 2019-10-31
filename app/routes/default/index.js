import BurndownChart from '../../widgets/burndown-chart';
import GithubRecentCommits from '../../widgets/github-recent-commits';

/*

DEAS: 
- move items using arrow keys, resize items with arrow keys + Ctrl
- most widgets should keep data prepared to avoid multiple loading indicators
- system documenting and meta widgets 
- widget map-reduce - widgets in parent boards should easily aggregate data from inner boards
*/

export default (
    <cx>
        <div class="grid">
            <div class="box w2 h2">
                <div class="box_title">Discussion</div>
            </div>
            <div class="w2">
                <div class="box_title">Tasks</div>
            </div>
            <div class="w2">
                <div class="box_title">TODO</div>
            </div>
            <GithubRecentCommits width={2} />
            <div class="w2">
                <div class="box_title">Pull Requests</div>
            </div>
            <BurndownChart width={2} height={1} />
            <div class="w2">
                <div class="box_title">Attachments</div>
            </div>
            <div class="w2">
                <div class="box_title">Wiki</div>
            </div>
            <div class="w4 h2">
                <div class="box_title">Timeline</div>
            </div>
            <div class="box w2">
                <div class="box_title">Workflow</div>
                <p ws>Define applicable actions at each state. Affects all child items.</p>
            </div>
            <div class="box w2">
                <div class="box_title">Team & Roles</div>
                <p ws>Permissions defined in this box affect all child items.</p>
            </div>
            <div class="box w2">
                <div class="box_title">Questions and Answers</div>
                <p ws>Ask questions and get help and instructions from other team members.</p>
            </div>
            <div class="box h2 w2">
                <div class="box_title">Activity</div>
            </div>
        </div>
    </cx>
);
