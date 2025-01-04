import React from "react";

export function createContext<T>() {
    const context = React.createContext<T>({} as T);

    function useContext() {
        const ctx = React.useContext(context);
        if (!ctx) {
            throw new Error("Context must be used within a Provider");
        }
        return ctx;
    }

    return [useContext, context.Provider] as const;
}

type IProvider = ({ children }: { children: React.ReactNode }) => React.ReactElement;

export const withProviders = (providers: IProvider[]) =>
    (WrappedComponent: any) =>
        (props: any) =>
            providers.reduceRight(
                (acc, Provider) => <Provider>{acc}</Provider>,
                <WrappedComponent {...props} />
            ); 