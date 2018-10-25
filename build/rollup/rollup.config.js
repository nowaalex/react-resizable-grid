import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-copy-plugin";

export default {
    input: "src/index.js",
    output: {
        file: "dist/bundle.esm.js",
        format: "esm"
    },
    external: [
        "react",
        "react-dom",
        "prop-types",
        "classnames",
        "react-draggable"
    ],
    plugins: [
        copy({
            "src/style.css": "dist/style.css"
        }),
        resolve({
            module: true,
            jsnext: true,
            main: true,
            browser: true,
            preferBuiltins: false
        }),
        babel({
            babelrc: false,
            externalHelpers: true,
            presets: [ "@babel/preset-react" ],
            plugins: [
                "@babel/plugin-external-helpers",
                [ "@babel/plugin-proposal-class-properties", { loose: true }],
                [ "@babel/plugin-proposal-object-rest-spread", { loose: true, useBuiltIns: true }]
            ]
        }),
        terser({
            ecma: 8,
            /*output: {
                beautify: true
            },*/
            mangle: {
                module: true,
                properties: {
                    keep_quoted: true,
                    regex: new RegExp([
                        "_dimensionsStateModifier",
                        "_setInitialDimensionsCache",
                        "_getChangedState",
                        "setExactDimensions",
                        "childrenMapper",
                        "refsArr",
                        "_curRszIndex",
                        "_initPtrPageDist",
                        "_getSaveRef"
                    ].join( "|" ))
                }
            }
        })
    ]
};