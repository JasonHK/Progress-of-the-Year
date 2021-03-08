import { useContext, useDebugValue } from "react";

import TimeContext from "../TimeContext";

export default function useTimestamp(): number
{
    const timestamp = useContext(TimeContext);
    useDebugValue(timestamp);

    return timestamp;
}
