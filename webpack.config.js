/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

const path = require( 'path' );
const { styles } = require( '@ckeditor/ckeditor5-dev-utils' );
const CKEditorWebpackPlugin = require('@ckeditor/ckeditor5-dev-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
    // https://webpack.js.org/configuration/entry-context/
    // entry: './app.js',

    entry: path.resolve(__dirname, 'src', 'ckeditor.js'),

    // https://webpack.js.org/configuration/output/
    // output: {
    //     path: path.resolve( __dirname, 'dist' ),
    //     filename: 'bundle.js'
    // }, 
    devServer: {
        static: {
            directory: './'
        },
        compress: true,
        port: 9000
    },

    output: {
        library: 'ClassicEditor',
    
        path: path.resolve(__dirname, 'build'),
        filename: 'ckeditor.js',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },

    optimization: {
        minimizer: [
          new TerserWebpackPlugin({
            sourceMap: true,
            terserOptions: {
              output: {
                // Preserve CKEditor 5 license comments.
                comments: /^!/,
              },
            },
            extractComments: false,
          }),
        ],
      },

    plugins: [
        new CKEditorWebpackPlugin({
            language: 'zh-cn',
            additionalLanguages: 'all',
            buildAllTranslationsToSeparateFiles: true,
            addMainLanguageTranslationsToAllAssets: true,
        })
    ],

    module: {
        rules: [
            {
                // test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
                test: /\.svg$/,

                use: [ 'raw-loader' ]
            },
            {
                // test: [/ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/, /\.css$/],
                test: /\.css$/,

                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: 'singletonStyleTag',
                            attributes: {
                                'data-cke': true
                            }
                        }
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: styles.getPostCssConfig( {
                                themeImporter: {
                                    themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
                                },
                                minify: true
                            } )
                        }
                    }
                ]
            }
        ]
    },

    // Useful for debugging.
    devtool: 'source-map',

    // By default webpack logs warnings if the bundle is bigger than 200kb.
    performance: { hints: false }
};
