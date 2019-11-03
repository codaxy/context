import { BurndownChart } from '../../widgets/burndown-chart';
import { GithubRecentCommits } from '../../widgets/github-recent-commits';
import { Wiki } from '../../widgets/wiki';
import { Todo } from '../../widgets/todo';

export default (
    <cx>
        <div class="filled app_content overflow-auto">
            <div class="grid">
                <div class="w2">
                    <div class="box_title">Assigned to Me</div>
                </div>

                <Todo width={2} />

                <div class="w2">
                    <div class="box_title">Time Entries</div>
                </div>
                <div class="w2">
                    <div class="box_title">Journal</div>
                </div>

                <Wiki
                    width={2}
                    height={2}
                    markdown={`
### Notes
    `}
                />

                <div class="w2 h1">
                    <div class="box_title">Random thing from Interent</div>
                </div>

                <div class="w4 h2">
                    <div class="box_title">Recent Activity</div>
                </div>
            </div>
        </div>
    </cx>
);
