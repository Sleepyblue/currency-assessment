import styles from "./Footer.module.css";
import SmallLogo from "../../assets/small-logo.svg";
import AppleStore from "../../assets/appstore.svg";
import PlayStore from "../../assets/playstore.svg";
import QRCode from "../../assets/qr-code.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <img src={SmallLogo} alt="Uphold Logo" />
        <div className={styles.products}>
          <h4>Products</h4>
          <ul>
            <li>Consumers</li>
            <li>Business</li>
            <li>Partners</li>
          </ul>
        </div>
        <div className={styles.company}>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className={styles.help}>
          <h4>Help</h4>
          <ul>
            <li>FAQ & Support</li>
            <li>Platform Status</li>
            <li>Criptonary</li>
            <li>Pricing</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className={styles.social}>
          <h4>Social</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div className={styles.stores}>
          <div className={styles.logos}>
            <img src={AppleStore} alt="Apple Store" />
            <img src={PlayStore} alt="Google Play" />
          </div>
          <select>
            <option value="en">English</option>
            <option value="en">French</option>
            <option value="en">Portuguese</option>
          </select>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          Uphold Europe Limited, Reg No. 09281410, Registered Office:
          Interchange Triangle, Chalk Farm Road, London, England, NW1 8AB
        </p>
        <div className={styles.bottomLinks}>
          <span>© Uphold, Inc. 2018. All Rights Reserved.</span>
          <a href="/agreements">Agreements</a>
          <a href="/privacy">Privacy & Data Policy</a>
          <a href="/cookie">Cookie Policy</a>
        </div>
        <img src={QRCode} alt="QR Code" />
      </div>
    </footer>
  );
};

export default Footer;
