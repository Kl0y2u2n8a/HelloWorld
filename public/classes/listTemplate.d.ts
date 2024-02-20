import { hasFormat } from "../interface/hasFormat";
export declare class listTemplate {
    private container;
    constructor(container: HTMLUListElement);
    render(item: hasFormat, heading: string, pos: "start" | "end"): void;
}
