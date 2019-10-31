import { ContentPlaceholder, Link } from 'cx/widgets';

export default (
    <cx>
        <div class="app">
            <header class="app_header">Header</header>
            <aside class="app_modules">
                <Link class="module" href="~/">
                    M1
                </Link>
                <Link class="module" href="~/2">
                    M2
                </Link>
            </aside>
            <aside class="app_sidebar"></aside>
            <ContentPlaceholder />
        </div>
    </cx>
);
