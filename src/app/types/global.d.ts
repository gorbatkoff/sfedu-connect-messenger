declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.json";

declare const __API_URL__: string;

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
