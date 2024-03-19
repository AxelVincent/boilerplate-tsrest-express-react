import { HTTPStatusCode } from './status-codes';
import { AppRoute, ContractAnyType, ContractOtherResponse } from './dsl';
export declare const isAppRouteResponse: (value: unknown) => value is {
    status: HTTPStatusCode;
    body?: any;
};
export declare const isAppRouteOtherResponse: (response: ContractAnyType | ContractOtherResponse<ContractAnyType>) => response is ContractOtherResponse<ContractAnyType>;
export declare const validateResponse: ({ appRoute, response, }: {
    appRoute: AppRoute;
    response: {
        status: number;
        body?: unknown;
    };
}) => {
    status: number;
    body?: unknown;
};
