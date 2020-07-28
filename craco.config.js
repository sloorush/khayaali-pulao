const CracoLessPlugin = require("craco-less");
const { getThemeVariables } = require("antd/dist/theme");

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessOptions: {
                    // If you are using less-loader@5 please spread the lessOptions to options directly
                    modifyVars: getThemeVariables({
                        dark: true, // 开启暗黑模式
                        compact: true, // 开启紧凑模式
                        "@primary-color": "##13a8a8",
                    }),
                    javascriptEnabled: true,
                },
            },
        },
    ],
};
