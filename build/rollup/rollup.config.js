import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
    input: "src/index.js",
    output: {
        file: "bundle.js",
        format: "esm"
    },
    external: [
        "react",
        "react-dom",
        "classnames",
        "lodash"
    ],
    plugins: [
        resolve({
            module: true,
            jsnext: true,
            main: true,
            browser: true,
            preferBuiltins: false
        }),
        babel({
            presets: [ "@babel/preset-react" ],
            plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-object-rest-spread"
            ]
        })
    ]
};