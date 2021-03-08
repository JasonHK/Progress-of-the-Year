import { useDebugValue } from "react";

import getDecimalTime from "../_utilities/getDecimalTime";

import useTimestamp from "./useTimestamp";

export default function useDecimalTime(timezone?: string): number
{
    const timestamp = useTimestamp();
    const time = getDecimalTime(timestamp, timezone);
    useDebugValue(time);

    return time;
}
