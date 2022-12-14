import React, { useState } from 'react'
import styles from "./Footer.module.css"

const Footer = () => {

    const [button, setButton] = useState(false)

    const handleButton = () => {
        setButton(!button)
    }

    const del = (
        <div className={styles.delete} onClick={handleButton}>Удалить из корзины</div>
    )

    return (
        <div className={styles.footer}>
            <div className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque facilis!</div>
            <div className={styles.buttonCase}>
                <button className={!button ? styles.buttonActive : styles.buttonNotActive} onClick={handleButton} disabled={button ? true : false}>{!button ? "Добавить в корзину" : "Уже в корзине"}</button>
            </div>
            {button ? del : null}
        </div>
    )
}

export default Footer