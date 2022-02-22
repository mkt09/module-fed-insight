const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "psmInsight",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  devServer: {
    proxy: require("./proxy.conf")
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      // For remotes (please adjust)
      name: "psmInsight",
      filename: "remoteEntry.js",
      exposes: {
        "./PsmInsightModule": "./src/app/psm-insight/psm-insight.module.ts",
      },

      // For hosts (please adjust)
      // remotes: {
      //     "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",

      // },

      shared: share({
        "@angular/core": {
          singleton: true,
          // strictVersion: true,
          requiredVersion: "auto",
          eager: true
        },
        "@angular/common": {
          singleton: true,
          // strictVersion: true,
          requiredVersion: "auto",
          eager: true
        },
        "@angular/common/http": {
          singleton: true,
          // strictVersion: true,
          requiredVersion: "auto",
          eager: true
        },
        "@angular/router": {
          singleton: true,
          // strictVersion: true,
          requiredVersion: "auto",
          eager: true
        },
        "@angular/platform-browser": {
          singleton: true,
          eager: true
        },
        "@angular/platform-browser-dynamic": {
          singleton: true,
          eager: true
        },
        'single-spa-angular':{
          singleton: true,
          eager: true,
        },
        'single-spa':{
          singleton: true,
          eager: true,
        },
        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
