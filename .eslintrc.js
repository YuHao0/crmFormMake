module.exports = {
    root: true,
    env: {
        node: true
    },
    globals: {
        AMap: true
    },
    extends: ["plugin:vue/essential", "@vue/prettier"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                tabWidth: 4,
                printWidth: 120
            }
        ],

        "invalid-first-character-of-tag-name": "off",
        "no-console": "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    },
    parserOptions: {
        parser: "babel-eslint"
    },
    overrides: [
        {
            files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
            env: {
                jest: true
            }
        }
    ]
};
