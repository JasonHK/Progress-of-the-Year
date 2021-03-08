import React, { Fragment } from "react";
import type { FC } from "react";

import Head from "next/head";

import useDecimalTime from "../core/Time/_hooks/useDecimalTime";

import DecimalTime from "../components/DecimalTime";

import styles from "./index.module.scss";

const IndexPage: FC = () =>
{
    return (
        <Fragment>
            <DecimalTimeHead />
            <div className={ styles.root }>
                <main className={ styles.main }>
                    <div className={ styles.time }><DecimalTime /></div>
                </main>
                <footer>
                    &copy; <DecimalTime digits={ 8 } /> Jason Kwok.
                </footer>
            </div>
            <button className={ styles.menu }>Menu</button>
        </Fragment>
    );
};

const DecimalTimeHead: FC = () =>
{
    const time = useDecimalTime().toFixed(8);

    return (
        <Head>
            <title>{ time }</title>
        </Head>
    );
};

export default IndexPage;
