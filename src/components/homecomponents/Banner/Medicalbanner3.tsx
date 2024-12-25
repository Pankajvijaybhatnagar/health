import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import docterImg from "../../../../public/images/doctor_img.jpg"; // Import the image
import styles from './css/banner3css.module.css'; // Import CSS module

const Medicalbanner3 = () => {
  return (
    <div className={styles.banner}>
      <div className={styles['banner-content']}>
        {/* Image Section on the Left */}
        <div className={styles['image-section']}>
          <Image
            src={docterImg} // Use the imported image
            alt="Doctors"
            width={500} // Define width
            height={500} // Define height
            className={styles['doctor-image']}
          />
        </div>

        {/* Text Section on the Right */}
        <div className={styles['text-section']}>
          <h1 className={styles['heading-primary']}>HAPPIER</h1>
          <h2 className={styles['heading-secondary']}>HEALTHIER</h2>
          <p className={styles['banner-description']}>
            We are committed to providing the best healthcare services. Experience advanced care for a healthier future.
          </p>
          <button className={styles['banner-button']}>Get Started</button>
        </div>
      </div>

      {/* Background Geometric Graphics */}
      <div className={styles['circle'] + ' ' + styles['large-circle']}></div>
      <div className={styles['circle'] + ' ' + styles['large-circle-1']}></div>
      <div className={styles['circle'] + ' ' + styles['large-circle-2']}></div>
      <div className={styles['circle'] + ' ' + styles['large-circle1']}></div>
      <div className={styles['circle'] + ' ' + styles['large-circle2']}></div>
      <div className={styles['circle'] + ' ' + styles['large-circle3']}></div>
      <div className={styles['circle'] + ' ' + styles['small-circle1']}></div>
      <div className={styles['circle'] + ' ' + styles['small-circle2']}></div>
    </div>
  );
};

export default Medicalbanner3;
