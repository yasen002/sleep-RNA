import { ConnectedComponent } from "react-redux";

export type InjectComp =
  | ConnectedComponent<(prop: any) => JSX.Element, {}>
  | ((prop?: any) => JSX.Element);
