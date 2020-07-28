const CracoLessPlugin = require("craco-less");

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { "@primary-color": "#63B275" },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
