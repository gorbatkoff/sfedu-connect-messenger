import path from "path";

import { BuildEnv, BuildPaths, buildWebpackConfig } from "./config/build";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entryPath: path.join(__dirname, "src", "index.tsx"),
    publicPath: path.join(__dirname, "public", "index.html"),
    outputPath: path.resolve(__dirname, "dist"),
    srcPath: path.resolve(__dirname, "src"),
  };

  const mode = env.mode || "development";
  const port = env.port || 3000;
  const apiUrl = env.apiUrl || "http://localhost:8000";
  const isDev = mode === "development";

  const config = buildWebpackConfig({
    paths,
    mode,
    port,
    isDev,
    apiUrl,
  });

  return config;
};
