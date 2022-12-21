import React from "react";
import styles from "../styles/Header.module.scss";
import { GiPalmTree } from "react-icons/gi";

export default function Header() {
    return(
        <header className={styles.Header}>
            <h1><span><GiPalmTree /></span>our hawaiian jaunt.</h1>
        </header>
    )


}