import DashboardWidget from '../DashboardWidget';
import { computable } from 'cx/ui';
import { getSelector } from 'cx/data';

import * as marked from 'marked';

export default ({ width, height, markdown }) => (
    <cx>
        <DashboardWidget width={width} height={height}>
            <div
                class="wiki"
                html={computable(getSelector(markdown), markdown => {
                    return marked(markdown);
                })}
            />
        </DashboardWidget>
    </cx>
);
