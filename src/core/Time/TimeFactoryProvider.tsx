import React, { useEffect, useRef, useState } from "react";
import type { FC } from "react";

import TimeContext from "./TimeContext";

export interface TimeFactoryProviderProps
{
    factory: () => number;
}

const TimeFactoryProvider: FC<TimeFactoryProviderProps> = ({ children, factory }) =>
{
    const requestRef = useRef<number>();
    const [timestamp, setTimestamp] = useState(factory());

    const onBeforeRepaint = () =>
    {
        requestRef.current = requestAnimationFrame(onBeforeRepaint);
        setTimestamp(factory());
    };

    useEffect(
        () =>
        {
            requestRef.current = requestAnimationFrame(onBeforeRepaint);
            return () => { (requestRef.current && cancelAnimationFrame(requestRef.current)); };
        },
        []);

    return (
        <TimeContext.Provider value={ timestamp }>
            { children }
        </TimeContext.Provider>
    );
};

export default TimeFactoryProvider;
