import { Configuration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export const buildDevServer = ({
  paths,
  port
}: BuildOptions): Configuration => {
  return {
    open: true,
    hot: true,
    static: {
      directory: paths.publicPath
    },
    historyApiFallback: true,
    compress: true,
    port: port
  };
};
