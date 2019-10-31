import { Repeater } from 'cx/widgets';
import DashboardWidget from '../DashboardWidget';

let sampleData = [
    {
        text: 'Fix getSearchQueryPredicate typing',
        hash: '314b7d',
        link: 'https://github.com/codaxy/cxjs/commit/80689fa45a51fd038bb028d9ad1a254f7a314b7d',
        author: 'mstijak',
        avatar: 'https://avatars1.githubusercontent.com/u/433394?s=60&amp;v=4',
    },
    {
        text: 'Fixes on material-dark theme',
        hash: '805b6a',
        link: 'https://github.com/codaxy/cxjs/commit/2be73d5e38cc820b650a7c476604ef5a1b805b6a',
        author: 'daniela991',
        avatar: 'https://avatars3.githubusercontent.com/u/30260464?s=60&v=4',
    },
    {
        text: 'Gallery improvements for IE',
        hash: 'db5f7a1',
        link: 'https://github.com/codaxy/cxjs/commit/0ed57973b587b27f0dfa796022d551a50db5f7a1',
        author: 'mstijak',
        avatar: 'https://avatars1.githubusercontent.com/u/433394?s=60&amp;v=4',
    },
    {
        text: 'Fix menu selection problem',
        hash: '177daf',
        link: 'https://github.com/codaxy/cxjs/commit/40d52dba2c2c3a44dda626f84e0f713cbe177daf',
        author: 'mstijak',
        avatar: 'https://avatars1.githubusercontent.com/u/433394?s=60&amp;v=4',
    },
];

export default ({ width, height }) => (
    <cx>
        <DashboardWidget width={width} height={height} title="Recent Commits">
            <Repeater records={sampleData}>
                <div class="ghrc">
                    <div>
                        <div text-bind="$record.text" class="ghrc_title" />
                        <div class="ghrc_desc">
                            <img height="20" width="20" src-bind="$record.avatar" class="ghrc_avatar" />
                            <strong text-bind="$record.author" /> authored <strong>yesterday</strong>
                        </div>
                    </div>
                    <a href-bind="$record.link" text-bind="$record.hash" target="_blank" class="ghrc_hash" />
                </div>
            </Repeater>
        </DashboardWidget>
    </cx>
);
