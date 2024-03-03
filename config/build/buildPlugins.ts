import webpack from "webpack";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = ({ paths, apiUrl }: BuildOptions) => {
  const plugins = [
    new HtmlWebpackPlugin({ template: paths.publicPath }),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash].css"
    }),
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      __API_URL__: JSON.stringify(apiUrl)
    })
  ].filter(Boolean);

  return plugins;
};
