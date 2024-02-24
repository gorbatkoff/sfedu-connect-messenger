import { ConfigOptions } from "webpack-cli";
import { buildDevServer } from "./buildDevServer";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { BuildOptions } from "./types/config";

export const buildWebpackConfig = (options: BuildOptions): ConfigOptions => {
  const { paths, mode, isDev } = options;

  return {
    entry: paths.entryPath,
    devtool: isDev ? "inline-source-map" : undefined,
    mode,
    output: {
      clean: true,
      filename: "main.js",
      path: paths.outputPath
    },
    devServer: buildDevServer(options),
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@": options.paths.srcPath
      }
    }
  };
};
