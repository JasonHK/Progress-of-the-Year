import { isServerSide } from "is-server-side";

import dayjs from "dayjs";
import arraySupport from "dayjs/plugin/arraySupport";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import duration from "dayjs/plugin/duration";

dayjs.extend(arraySupport);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(duration);

dayjs.tz.setDefault(isServerSide() ? "UTC" : dayjs.tz.guess());
