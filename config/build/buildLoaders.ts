import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/
  };

  const jsonLoader = {
    test: /\.json$/,
    loader: 'json-loader'
  }

  const svgrLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"]
  };

  const gifLoader = {
    test: /\.gif$/,
    type: "asset/inline"
  };

  const resourceLoader = {
    test: /\.(ttf|eot|svg)$/,
    type: "asset/resource"
  };

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDev
              ? "[path][name]__[local]"
              : "[hash:base64:8]"
          }
        }
      },
      "sass-loader"
    ]
  };

  return [typeScriptLoader, sassLoader, jsonLoader, svgrLoader, gifLoader, resourceLoader];
};
