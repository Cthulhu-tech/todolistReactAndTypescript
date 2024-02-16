import { JSXElementConstructor, ReactElement } from "react";

export type childrenElementType = {
    children: ReactElement| ReactElement<any, string | JSXElementConstructor<any>>;
};
