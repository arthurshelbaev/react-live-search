import React from "react"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import styles from "./Products.module.css"

const Product = ({ filtered }) => {
    console.log(filtered, 'ggg');

    return filtered.map((item, index) => {
        return (
            <div className={styles.products} key={index}>
                <Main item={item}/>
                <hr className={styles.hr}/>
                <Footer />
            </div>
        )
    })
}

export default Product