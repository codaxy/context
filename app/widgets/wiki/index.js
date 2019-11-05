import DashboardWidget from '../DashboardWidget';
import { computable } from 'cx/ui';
import { getSelector } from 'cx/data';

import * as marked from 'marked';

export const Wiki = ({ width, height, markdown }) => (
    <cx>
        <DashboardWidget width={width} height={height}>
            <div
                class="wiki"
                html={computable(getSelector(markdown), markdown => {
                    return markdown ? marked(markdown) : '';
                })}
            />
        </DashboardWidget>
    </cx>
);
