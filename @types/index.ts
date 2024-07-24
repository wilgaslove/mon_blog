export interface Blog {
    _path:       string;
    _dir:        string;
    _draft:      boolean;
    _partial:    boolean;
    _locale:     string;
    title:       string;
    description: string;
    body:        Body;
    _type:       string;
    _id:         string;
    _source:     string;
    _file:       string;
    _extension:  string;
}

export interface Body {
    type:     string;
    children: BodyChild[];
    toc:      Toc;
}

export interface BodyChild {
    type:     FluffyType;
    tag:      Tag;
    props:    Props;
    children: ChildChild[];
}

export interface ChildChild {
    type:  PurpleType;
    value: string;
}

export enum PurpleType {
    Text = "text",
}

export interface Props {
    id?: string;
}

export enum Tag {
    H1 = "h1",
    H2 = "h2",
    P = "p",
}

export enum FluffyType {
    Element = "element",
}

export interface Toc {
    title:       string;
    searchDepth: number;
    depth:       number;
    links:       Link[];
}

export interface Link {
    id:    string;
    depth: number;
    text:  string;
}
