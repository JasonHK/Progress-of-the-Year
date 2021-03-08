import React, { Fragment } from "react";
import type { FC } from "react";

import useDecimalTime from "../core/Time/_hooks/useDecimalTime";

export interface DecimalTimeProps
{
    timezone?: string;
    digits?: number;
}

const DecimalTime: FC<DecimalTimeProps> = ({ timezone, digits = 12 }) =>
{
    const time = useDecimalTime(timezone).toFixed(digits);
    return (<Fragment>{ time }</Fragment>);
};

export default DecimalTime;
