module.exports = () => ({
  presets: [
    [
      require('babel-preset-env'),
      {
        loose: true,
        uglify: true,
        modules: false,
        targets: {
          browsers: ["> 100%", "last 200 versions", "IE >= 19"]
        },
        exclude: ["transform-regenerator", "transform-es2015-typeof-symbol"]
      }
    ],
    require('babel-preset-stage-1')
  ],
  plugins: [
    require("babel-plugin-transform-object-assign"),
    require("babel-plugin-transform-decorators-legacy"),
    require("babel-plugin-transform-react-constant-elements"),
    require("babel-plugin-transform-react-remove-prop-types"),
    [require("babel-plugin-transform-react-jsx"), { pragma: "h" }],
    [
      require.resolve("babel-plugin-jsx-pragmatic"),
      {
        module: "preact",
        export: "h",
        import: "h"
      }
    ]
  ]

});
