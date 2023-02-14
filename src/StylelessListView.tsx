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
    // useState creates a localized variable 
    // When the value of that changes => the content (the HTML in the return) re-renders
    // (e.g. when setItems is called, this will also automatically update the UI with the new items)
    const [items, setItems] = useState<ReactNode[]>([]);

    // useEffect is a function that runs automatically but ONLY on:
    // 1) first load or
    // 2) when the value specified in the second parameter (array) changes
    // In this example, the first load will always have no items (because the Microflow/ xpath is still running)
    // because I specified [data.items] - the function will automatically run again when the Microflow finishes
    useEffect(() => {
        // All Dynamic content comes with a .status attribute
        // This can be either Loading (still running), Unavailable (an error occurred), or Available (data source finished)
        if (data.status === ValueStatus.Available && data.items) {
            // When the data source has finished, map the data into memory and re-render
            setItems(
                // Iterate each object from the data source into a <div/> element
                data.items.map(item => 
                    <div 
                    //When the user clicks on this row / column, call the MxAction the developer has specific with this particular object's context
                    onClick={() => onClick?.get(item).execute()}>
                        {/*Inside that div, render the content the Mendix developer dropped in the Widget's data view with this particular object's context*/}
                        {content.get(item)}
                    </div>
                )
            );
        }
        // This is the 'Dependency array'. When the values specified change, the useEffect function is re-ran
    }, [data.items]);

    return (
        // Pass the Modeler name and Style into the widget structure
        <div id={name} style={style} className="styleless-list-view">
            <div
                // set the flex direction based on the direction from the widget properties (expression ? true : false)
                style={{
                    display: "flex",
                    flexDirection: direction === "horizontal" ? "row" : "column",
                }}
            >
                {/*Render the cleaned content from the useState variable*/}
                {items}
            </div>
        </div>
    );
}
