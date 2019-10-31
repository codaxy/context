import { ContentPlaceholder, Link } from 'cx/widgets';

export default (
    <cx>
        <div class="app">
            <header ws>
                <img class="logo" src="~/assets/img/cxjs.svg" alt="Logo" />

                <Link href="~/" url-bind="url">
                    Home
                </Link>
            </header>
            <main>
                <ContentPlaceholder />
            </main>
            <footer />
        </div>
    </cx>
);
