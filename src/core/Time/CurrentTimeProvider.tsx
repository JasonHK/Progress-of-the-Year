import React from "react";
import type { FC } from "react";

import TimeFactoryProvider from "./TimeFactoryProvider";

const CurrentTimeProvider: FC = ({ children }) =>
{
    return (
        <TimeFactoryProvider factory={ Date.now }>
            { children }
        </TimeFactoryProvider>
    );
};

export default CurrentTimeProvider;
