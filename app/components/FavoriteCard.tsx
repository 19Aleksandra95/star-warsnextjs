import React from "react";
import styles from './FavoriteCard.module.css'
import AddToFavorite from "./AddToFavorite";

export default function FavoriteCard() {
  return (
    <div className={styles.card}>
      <AddToFavorite/>
    </div>
  );
}
