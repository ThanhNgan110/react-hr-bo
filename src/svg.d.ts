declare module "*.svg?react" {
  const React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGElement>>
}