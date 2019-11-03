module.exports = {
    cacheDirectory: true,
    cacheIdentifier: 'v1',
    presets: [
        [
            'cx-env',
            {
                targets: {
                    chrome: 70,
                    firefox: 50,
                    safari: 13,
                },
                modules: false,
                loose: true,
                useBuiltIns: 'usage',
                corejs: 3,
                cx: {
                    imports: {
                        useSrc: true,
                    },
                },
            },
        ],
        '@babel/preset-typescript',
    ],
    plugins: [],
};
