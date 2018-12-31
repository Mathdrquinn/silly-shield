import { UrlObject } from 'url';

export interface IHref<Q> extends UrlObject {
    pathname: string;
    query: Q;
}
