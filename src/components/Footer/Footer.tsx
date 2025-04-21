import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss"; // Ensure SCSS is correctly imported
import "boxicons/css/boxicons.min.css";
import { Facebook, Linkedin, Instagram, Twitter,ChevronRight,Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <div className={`${styles["footer-part"]}`}>
    {/* <section className={styles["footer-section"]}/> */}
  <div className={`${styles["content-wrapper"]} container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4`}>
 
 <div className={`${styles["footer-container"]} flex flex-col justify-center items-center gap-4 w-full`}>
  
  {/* Join Us Content */}
  <div className={`${styles["text-content"]} text-left`}>
    <h2 style={{ color: "white" }}>
      Connect with us today and<br /> accelerate your Business growth
    </h2>
  </div>

  {/* Image (Hidden on Mobile) */}
  <div className={`${styles["image-container"]} hidden md:flex justify-center`}>
  <Link href="/contactus">
    <img
      src="/images/Footer 5.png"
      alt="Business Growth"
      style={{ width: "125px", height: "auto", cursor: "pointer" }}
    />
  </Link>
</div>

  {/* Get Started Button */}
  <div className="flex justify-center items-center mt-4 md:mt-0 w-full">
    <Link href="/contactus">
      <button className={styles.getStartedButton}>
        <span>Contact us</span>
        <div className={styles["arrow-circle"]}>
          <ChevronRight className={styles["arrow-icon"]} size={20} />
        </div>
      </button>
    </Link>
  </div>

</div>




        <section className={`${styles["footer-section"]} pt-10 mt-5`}>
          <div className="container">
            <div className="row">
              {/* Logo and Contact Section */}
              <div className="col-lg-12">
                <div className={`${styles["footer-logo-and-info"]}`}>
                  {/* Logo */}
                  <div className={`${styles["footer-logo"]}`}>
                    <Link href="/">
                      <a>
                        <img
                          className="logo_image"
                          src="/images/logo_black.png"
                          alt="logo"
                        />
                      </a>
                    </Link>
                  </div>
                  {/* Address, My Accounts, Other Links, About Us */}
                  <div className={`${styles["footer-info"]}`}>
                    <div className={`${styles["footer-contact-info"]}`}>
                      <h2>Address</h2>

                      {/* Address */}
                      <div className={`${styles["footer-icons"]}`}>
                        <i className="bx bx-location-plus"></i>
                        <span style={{marginRight:"45px"}}>
                         <span style={{marginRight:"25px"}}> 11555 Medlock Bridge Road,</span><br/>Suite 100,Johns Creek,GA-30097
                          
                        </span>
                        <br />
                        <span> </span>
                      </div>

                      {/* Phone */}
                      <div className={`${styles["footer-contact-item"]}`}>
                        <i className="bx bx-phone"></i>
                        <span>(833) 353-7773</span>
                      </div>

                      {/* Email */}
                      <div className={`${styles["footer-contact-item"]}`}>
                        <i className="bx bx-envelope"></i>
                        <span>contactus@truckergig.com</span>
                      </div>
                    </div>

                    <div className={`${styles["footer-links"]}`}>
                      <div className={`${styles["quick-links"]}`}>
                        <h2>Ouick Links</h2>
                        <ul>
                          <Link href="/about">
                            <li>
                              <a href="#">About Us</a>
                            </li>
                          </Link>
                          <Link href="/privacypolicy">
                            <li>
                              <a href="#">Privacy Policy</a>
                            </li>
                          </Link>
                          <Link href="/terms">
                            <li>
                              <a href="#">Terms & Conditions</a>
                            </li>
                          </Link>
                          <Link href="/contactus">
                            <li>
                              <a href="#">Contact Us</a>
                            </li>
                          </Link>
                        </ul>
                      </div>
                      <div className={`${styles["quick-links"]}`}>
                        <h2>My Accounts</h2>
                        <ul>
                          <Link href="/login">
                            <li>
                              <a href="#">Login</a>
                            </li>
                          </Link>
                          <Link href="/generalinfo">
                            <li>
                              <a href="#">Driver Register</a>
                            </li>
                          </Link>
                          <Link href="/vendor">
                            <li>
                              <a href="#">Vendor Register</a>
                            </li>
                          </Link>
                        </ul>
                      </div>

                      <div className={`${styles["quick-links"]}`}>
                        <h2>Social Links</h2>
                        <ul className={styles["social-icons"]}>
                       
                          <li>
                            <a
                              href=" https://www.linkedin.com/company/truckergig/ "
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Linkedin size={20} />
                            </a>
                          </li>
                          <li>
                            <a
                              href=" https://www.facebook.com/truckergig/ "
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Facebook size={20} />
                            </a>
                          </li>
                          <li>
                          <a
                             href="https://www.youtube.com/@truckergig8784/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <Youtube size={20} />
                          </a>
                        </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proud Members Section */}
            <div className="row">
              <div className="col-lg-12">
                <div
                  className={`${styles["single-footer-widget"]} ${styles["proud-members"]}`}
                >
                  <div className={styles["proud-members-title"]}>
                    <div className={styles["proud-line-left"]}></div>
                    <h2>PROUD MEMBERS </h2>
                    <div className={styles["proud-line-right"]}></div>
                  </div>
                  {/* Proud Member Logos */}
                  <div className="row justify-content-center">
                    <div className="col-md-3 d-flex justify-content-center">
                      <img className="h_60" src="/images/ltna.jpg" alt="logo" />
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                      <img className="h_60" src="/images/TNS.jpg" alt="image" />
                    </div>
                    <div className="col-md-3 d-flex justify-content-center">
                      <img
                        className="h_60"
                        src="/images/BITA.jpg"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright Section */}
        <div className={`${styles["copyright-area"]}  ptb-5`}>
          <hr style={{ color: "black" }}></hr>

          <div className="container">
            <div className={`${styles["copyright-area-content"]}`}>
              <p>© 2025 TruckerGIG. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
