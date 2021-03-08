import dayjs from "dayjs";
import type { Dayjs } from "dayjs";

import useTimestamp from "./useTimestamp";

export default function useDayjs(timezone?: string): Dayjs
{
    const timestamp = useTimestamp();
    return dayjs.tz(timestamp, timezone);
}
