import React from 'react'
import { useState } from 'react'
import Products from '../Products/Products'
import styles from "./App.module.css"

const App = () => {

    const [arr] = useState ([
        { name: "Nike Sneaker", price: "$120", img: require("../../assets/sneaker.webp") },
        { name: "Abibas", price: "$8", img: require("../../assets/abibas.webp") },
        { name: "Fila", price: "$200", img: require("../../assets/fila.jpg") },
        { name: "Adidas", price: "$250", img: require("../../assets/adidas.jpg") },
        { name: "Converse", price: "$150", img: require("../../assets/converse.jpeg") },
        { name: "Nike AirMax", price: "$300", img: require("../../assets/airmax.webp") }
    ])

    const [text, setText] = useState("")
    
    const filtered = arr.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))

    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <input className={styles.input} type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <Products filtered={filtered} />
        </div>
    )
}

export default App