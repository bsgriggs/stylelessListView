import { ReactElement, createElement, useEffect, useState, ReactNode } from "react";
// import { HelloWorldSample } from "./components/HelloWorldSample";
import { ValueStatus } from "mendix";
import { StylelessListViewContainerProps } from "../typings/StylelessListViewProps";

import "./ui/StylelessListView.css";

export function StylelessListView({
    data,
    direction,
    onClick,
    content,
    name,
    style
}: StylelessListViewContainerProps): ReactElement {
    const [items, setItems] = useState<ReactNode[]>([]);

    useEffect(() => {
        if (data.status === ValueStatus.Available && data.items) {
            setItems(
                data.items.map(item => {
                    return <div onClick={() => onClick?.get(item).execute()}>{content.get(item)}</div>;
                })
            );
        }
    }, [data.items]);

    return (
        <div id={name} style={style} className="styleless-list-view">
            <div style={{ display: "flex", flexDirection: direction === "horizontal" ? "row" : "column", backgroundColor: "red" }}>{items}</div>
        </div>
    );
}
