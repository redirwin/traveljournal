import React from "react";
import styles from "../styles/Card.module.scss";
import { MdLocationPin } from "react-icons/md";

export default function Card(props) {
  return (
    <>
    <div className={styles.Card}>
      <div className={styles.imageContainer}>
        <img src={props.place.images[0].url} />
        {
          //     props.place.images.map((image, index) => {
          //     return <img src={image.url} alt={image.alt} key={index}/>;
          // })
        }
      </div>
      <div className={styles.textContainer}>
        <div className={styles.locationDiv}>
            <MdLocationPin />
            <h4>{props.place.location}</h4>
            <a href={props.place.googleMap} target="_blank">View on Google Maps</a>
        </div>
        <h2>{props.place.title}</h2>
        <p className={styles.date}>{props.place.dateVisited}</p>
        <p className={styles.description}>{props.place.description}</p>
        <div className={styles.linksContainer}>
            <a href={props.place.wiki} target="_blank">Wikipedia</a>
            <span> • </span>
            <a href={props.place.officialWebsite} target="_blank">Official Website</a>
        </div>
      </div>
    </div>
    <hr></hr>
    </>
  );
}
