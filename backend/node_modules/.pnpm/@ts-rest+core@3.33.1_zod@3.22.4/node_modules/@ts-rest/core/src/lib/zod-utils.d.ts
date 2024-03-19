import { z } from 'zod';
export declare const isZodType: (obj: unknown) => obj is z.ZodTypeAny;
export declare const isZodObject: (obj: unknown) => obj is z.AnyZodObject | z.ZodEffects<z.AnyZodObject, {
    [x: string]: any;
}, {
    [x: string]: any;
}>;
export declare const isZodObjectStrict: (obj: unknown) => obj is z.AnyZodObject;
export declare const extractZodObjectShape: <T extends z.AnyZodObject | z.ZodEffects<z.ZodTypeAny, any, any>>(obj: T) => any;
export declare const zodMerge: (objectA: unknown, objectB: unknown) => {};
export declare const checkZodSchema: (data: unknown, schema: unknown, { passThroughExtraKeys }?: {
    passThroughExtraKeys?: boolean | undefined;
}) => {
    success: true;
    data: unknown;
} | {
    success: false;
    error: z.ZodError;
};
export declare const zodErrorResponse: (error: z.ZodError) => Pick<z.ZodError, 'name' | 'issues'>;
