/**
 * This file was generated from StylelessListView.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties } from "react";
import { ListValue, ListActionValue, ListWidgetValue } from "mendix";

export type DirectionEnum = "vertical" | "horizontal";

export interface StylelessListViewContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    data: ListValue;
    content: ListWidgetValue;
    onClick?: ListActionValue;
    direction: DirectionEnum;
}

export interface StylelessListViewPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    data: {} | { type: string } | null;
    content: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    onClick: {} | null;
    direction: DirectionEnum;
}
