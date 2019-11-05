import { Route, PureContainer, Sandbox } from 'cx/widgets';

import AppLayout from '../layout';
import Default from './default';
import About from './about';
import Home from './home';
import Issues from './issues';
import { SandboxedRoute } from '../components/SandboxedRoute';

export default (
    <cx>
        <PureContainer outerLayout={AppLayout}>
        
            <SandboxedRoute url-bind="url" route="~/home">
                <Home />
            </SandboxedRoute>
            <SandboxedRoute url-bind="url" route="~/">
                <Default />
            </SandboxedRoute>
            <Route url-bind="url" route="~/issues/:issueId">
                <Issues />
            </Route>
        </PureContainer>
    </cx>
);
