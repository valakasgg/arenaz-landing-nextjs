import React, { useEffect, useRef } from "react";
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Jumbotron.module.css'

export default function Jumbotron() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

    return (
        <div className={styles.jumbo}>
            <video
                style={{ maxWidth: "100%", margin: "0 auto" }}
                playsInline
                loop
                muted
                alt="All the devices"
                src="https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"
                ref={videoEl}
            />
        </div>
    );
}
