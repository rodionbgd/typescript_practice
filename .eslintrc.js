module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["airbnb-base", "prettier"],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    overrides: [{
        "files": ["src/*.ts"],
        parser: "@typescript-eslint/parser",
        parserOptions: {
            "project": "./tsconfig.json"
        },
        plugins: ["@typescript-eslint/eslint-plugin"],
        rules: {
            "max-len": [
                "error",
                {
                    ignoreComments: true,
                    code: 120,
                },
            ],
            "no-unused-vars": "off",
            "no-use-before-define": "off",
            "import/prefer-default-export": "off",
            "no-shadow": "off",
        },
    }],
    settings: {
        "import/resolver": {
            "node": {
                "extensions": [".ts"],
            }
        }
    }
};
