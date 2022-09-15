declare function defaultComparator<T>(a: T, z: T): boolean;
export declare let RadioGroup: import("vue").DefineComponent<{
    as: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    disabled: {
        type: BooleanConstructor[];
        default: boolean;
    };
    by: {
        type: (StringConstructor | FunctionConstructor)[];
        default: () => typeof defaultComparator;
    };
    modelValue: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    defaultValue: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    name: {
        type: StringConstructor;
        optional: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (_value: any) => true;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    as: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    disabled: {
        type: BooleanConstructor[];
        default: boolean;
    };
    by: {
        type: (StringConstructor | FunctionConstructor)[];
        default: () => typeof defaultComparator;
    };
    modelValue: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    defaultValue: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    name: {
        type: StringConstructor;
        optional: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((_value: any) => any) | undefined;
}, {
    as: string | Record<string, any>;
    disabled: boolean;
    by: string | Function;
    modelValue: string | number | boolean | Record<string, any>;
    defaultValue: string | number | boolean | Record<string, any>;
}>;
export declare let RadioGroupOption: import("vue").DefineComponent<{
    as: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    value: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor | NumberConstructor)[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    as: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    value: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor | NumberConstructor)[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    as: string | Record<string, any>;
    disabled: boolean;
}>;
export declare let RadioGroupLabel: import("vue").DefineComponent<{
    as: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    passive: {
        type: BooleanConstructor[];
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    as: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    passive: {
        type: BooleanConstructor[];
        default: boolean;
    };
}>>, {
    as: string | Record<string, any>;
    passive: boolean;
}>;
export declare let RadioGroupDescription: import("vue").DefineComponent<{
    as: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    as: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
}>>, {
    as: string | Record<string, any>;
}>;
export {};
