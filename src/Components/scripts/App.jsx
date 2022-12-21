import React from "react";
import styles from "../styles/App.module.scss";
import places from "../../data/places";
import Header from "./Header";
import Card from "./Card";

function App() {

  const cards = places.map((place) => {
    return <Card key={place.id} place={place} />;
  });

  return (
    <div className={styles.App}>
      <Header />
      <main>{cards}</main>
    </div>
  );
}

export default App
