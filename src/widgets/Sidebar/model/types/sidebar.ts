import { FunctionComponent, SVGAttributes } from 'react';

export interface SidebarElement {
    path: string;
    Icon: FunctionComponent<SVGAttributes<SVGElement>>;
    title: string;
    authOnly?: boolean;
}
