import dayjs from "dayjs";

export default function getDecimalTime(timestamp: number, timezone?: string): number
{
    const time = dayjs.tz(timestamp, timezone);

    const currentYear = dayjs.tz([time.year()], timezone);
    const nextYear = dayjs.tz([time.year() + 1], timezone);

    return (time.year() + (time.diff(currentYear) / nextYear.diff(currentYear)));
}
