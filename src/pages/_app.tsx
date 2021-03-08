import React from "react";

import App from "next/app";

import "../core/_initialize/dayjs";

import CurrentTimeProvider from "../core/Time/CurrentTimeProvider";

import "suitcss-base/index.css";
import "../theme/theme.scss";

export default class _App extends App
{
    render(): JSX.Element
    {
        const { Component, pageProps } = this.props;

        return (
            <CurrentTimeProvider>
                <Component { ...pageProps } />
            </CurrentTimeProvider>
        );
    }
}
