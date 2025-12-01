'use client';

import React, { useState, useRef, useEffect } from "react";
import styles from "./Member.module.css";

type MemberProps = {
  src: string;
  alt?: string;
  name: string;
  project?: string;
  studyProgram?: string;
  className?: string;
  width?: number | string;
  roleTag?: string;
};

const emerald = "#064e3b";      // emerald-900
const emeraldLight = "#0d8b6e"; // optional accent

const Member: React.FC<MemberProps> = ({
  src,
  alt = "",
  name,
  project = "",
  studyProgram = "",
  className,
  width = 240,
  roleTag,
}) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Falls das Bild schon im Cache ist und onLoad nicht mehr ausgelöst wird
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, [src]);

  const containerStyle: React.CSSProperties = {
    width,
    maxWidth: "100%",
    backgroundColor: emerald,
    borderRadius: 12,
    overflow: "hidden",
    fontFamily:
      'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    marginLeft: 8,
    marginRight: 8,
  };

  const imageWrapperStyle: React.CSSProperties = {
    width: "100%",
    aspectRatio: "3 / 3",
    overflow: "hidden",
    backgroundColor: emerald,
    position: "relative",
  };

  const imgStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    opacity: loaded ? 0.95 : 0,
    transform: loaded ? "translateY(0px)" : "translateY(6px)",
    transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
  };

  const captionStyle: React.CSSProperties = {
    marginTop: 10,
    textAlign: "center",
    paddingBottom: 16,
  };

  return (
    <div
      className={`${styles.container} ${className ?? ""}`}
      style={containerStyle}
    >
      <figure style={{ margin: 0 }}>
        <div style={imageWrapperStyle}>
          {roleTag && <span className={styles.tag}>{roleTag}</span>}

          {!loaded && <div className={styles.skeleton} />}

          <img
            ref={imgRef}
            src={src}
            alt={alt}
            style={imgStyle}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)} // zur Sicherheit, damit Skeleton nicht hängen bleibt
          />
        </div>

        <figcaption style={captionStyle}>
          <p
            style={{
              margin: 0,
              fontWeight: 600,
              color: "white",
              fontSize: 18,
            }}
          >
            {name}
          </p>
          <p
            style={{
              margin: "4px 0 0 0",
              color: emeraldLight,
              fontWeight: 500,
            }}
          >
            {project}
          </p>
          <p
            style={{
              margin: "2px 0 0 0",
              color: "#d1d5db",
              fontSize: 13,
            }}
          >
            {studyProgram}
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default Member;