export type BuildMode = "production" | "development";

export interface BuildPaths {
  entryPath: string;
  publicPath: string;
  outputPath: string;
  srcPath: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions extends BuildEnv {
  paths: BuildPaths;
  isDev: boolean;
}
