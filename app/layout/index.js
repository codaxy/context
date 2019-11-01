import { ContentPlaceholder, Link } from 'cx/widgets';

export default (
    <cx>
        <div class="app">
            <header class="app_header">
                <h1>Context</h1>
            </header>
            <aside class="app_modules">
                <Link class="module" href="~/map" url-bind="url">
                    Map
                </Link>
                <Link class="module" href="~/" url-bind="url">
                    Issues
                </Link>
                <Link class="module" href="~/kanban" url-bind="url">
                    Kanban
                </Link>
            </aside>
            <ContentPlaceholder name="sidebar" />
            <ContentPlaceholder />
        </div>
    </cx>
);
