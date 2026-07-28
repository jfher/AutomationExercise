import tseslint from "typescript-eslint";

export default tseslint.config({

    rules: {

        "no-console": "warn",

        "prefer-const": "error",

        "no-unused-vars": "off",

        "@typescript-eslint/no-unused-vars": [

            "error"

        ]

    }

});