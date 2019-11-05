import { Route, Sandbox } from 'cx/widgets';

const defaultUrl = { bind: 'url' };
const defaultStorage = { bind: 'pages' };

export const SandboxedRoute = ({ route, url, key, storage, children }) => (
    <cx>
        <Route url={url || defaultUrl} route={route}>
            <Sandbox storage={storage || defaultStorage} key={key || url || defaultUrl}>
                {children}
            </Sandbox>
        </Route>
    </cx>
);
