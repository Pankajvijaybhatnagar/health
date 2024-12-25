"use client";

import React from "react";
import Image from "next/image";
import doctorPatient from "../../../../public/images/bigbyte-banner2.webp"; // Replace with the correct path to the image
import styles from "./css/banner2css.module.css"; // Import CSS module

const MedicalBanner2 = () => {
  return (
    <div className={styles.bannerSection}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.textSection}>
          <h3 className={styles.subHeading}>OUR MISSION</h3>
          <h1 className={styles.mainHeading}>
            Holistic care <span>Beyond Borders! </span>
          </h1>
          <p className={styles.description}>
            Experience India&apos;s best holistic care for chronic illnesses
            alongside our complete care solutions including- health, travel and
            hospitality.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className={styles.imageSection}>
          <Image
            src={doctorPatient}
            alt="Doctor with patient"
            layout="intrinsic"
            width={600}
            height={400}
            className={styles.bannerImage}
          />
        </div>

        {/* Decorative Boxes */}
        <div className={`${styles.decorativeBox} ${styles.box1}`}></div>
        <div className={`${styles.decorativeBox} ${styles.box2}`}></div>
        <div className={`${styles.decorativeBox} ${styles.box3}`}></div>
        <div className={`${styles.decorativeBox} ${styles.box4}`}></div>
      </div>
    </div>
  );
};

export default MedicalBanner2;
