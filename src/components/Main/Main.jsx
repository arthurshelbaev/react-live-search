import React from "react"
import { useState } from "react"
import styles from "./Main.module.css"

const Main = ({ item }) => {

    const [button, setButton] = useState(false)

    const handleWindow = () => {
        setButton(!button)
    }

    const window = (
        <div className={styles.window}>
            <div className={styles.message}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fuga laborum!</div>
            <button className={styles.close} onClick={handleWindow}>❌</button>
        </div>
    )

    return (
        <div>
            <div className={styles.imgCase}>
                <img className={styles.img} src={item.img} alt="" />
            </div>
            <div className={styles.main}>
                <div className={styles.title}>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.price}>{item.price}</div>
                </div>
                <div className={styles.buttonCase}>
                    <button className={styles.button} onClick={handleWindow}>Детали</button>
                    <div className={styles.window} >{button ? window : null}</div>
                </div>
            </div>
        </div>
    )
}

export default Main