import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const sassLoader = {
    test: /\.(c|sa|sc)ss$/,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: "[path][name]__[local]--[hash:base64:5]",
          },
        },
      },
      "sass-loader"
    ]
  };

  const svgrLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  return [typeScriptLoader, sassLoader, svgrLoader];
};
