// CustomAlert.js

import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from "../styles/CustomAlert.module.css";

const CustomAlert = ({ message, onClose }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            onClose();
        }, 2000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const handleClose = () => {
        setShow(false);
        onClose();
    };

    return (
        <>
            {show && (
                <div className={`${styles.alert} ${styles.greenBackground}`}>
                    <p>{message}</p>
                    <FaTimes onClick={handleClose} className={styles.closeIcon} />
                </div>
            )}
        </>
    );
};

export default CustomAlert;
