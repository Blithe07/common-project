module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.eslint.json"
    },
    plugins: ["vue", "@typescript-eslint", "prettier"],
    rules: {
        "prettier/prettier": [
            "error",
            {},
            {
                fileInfoOptions: {
                    withNodeModules: true
                }
            }
        ]
    },
};
