import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = ({ paths, isDev }: BuildOptions) => {
  const plugins = [
    new HtmlWebpackPlugin({ template: paths.publicPath }),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash].css",
    }),
    new ReactRefreshWebpackPlugin()
  ].filter(Boolean);

  return plugins;
};
