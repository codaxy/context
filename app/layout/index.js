import { ContentPlaceholder, Link, enableTooltips, TextField } from 'cx/widgets';

enableTooltips();

export default (
    <cx>
        <div class="app">
            <header class="app_header">
                <h1>Context</h1>
                <div class="omnibox">
                    <TextField value-bind="omni.query" mod="omni" trackFocus />
                    <div class="omnibox_results">Test</div>
                </div>
                <div class="usermenu"></div>
            </header>
            <aside class="app_modules">
                <div class="spacer module" />
                <Link class="module" href="~/home" url-bind="url">
                    Home
                </Link>
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
