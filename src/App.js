import React from "react";

function App() {
  const styles = {
    // Main containers and sections
    container: {
      backgroundColor: "#000000",
      color: "#FFFFFF",
      minHeight: "100vh",
    },
    contentContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
      position: "relative",
    },
    whiteSection: {
      backgroundColor: "#FFFFFF",
      color: "#000000",
      padding: "1px 0",
      marginTop: "120px",
    },

    // Header styles
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "40px 0",
    },
    logo: {
      fontSize: "1.75rem",
      fontWeight: "400",
      fontFamily: "Inter, sans-serif",
    },
    nav: {
      display: "flex",
      listStyle: "none",
    },
    navItem: {
      marginLeft: "40px",
    },
    navLink: {
      textDecoration: "none",
      color: "#FFFFFF",
      fontWeight: "400",
      fontSize: "0.95rem",
      fontFamily: "Inter, sans-serif",
    },
    ctaButton: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "#FFFFFF",
      padding: "8px 16px",
      borderRadius: "4px",
      textDecoration: "none",
      fontWeight: "400",
      fontSize: "0.95rem",
      fontFamily: "Inter, sans-serif",
    },

    // Hero section
    hero: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      padding: "120px 0 80px",
    },
    heroContent: {
      flex: "0 0 60%",
    },
    heroImage: {
      flex: "0 0 35%",
      textAlign: "right",
    },
    heroTitle: {
      fontSize: "3.5rem",
      fontWeight: "400",
      lineHeight: "1.2",
      marginBottom: "100px",
      fontFamily: "Inter, sans-serif",
    },
    subtitle: {
      fontSize: "1.1rem",
      fontWeight: "300",
      maxWidth: "450px",
      fontFamily: "Inter, sans-serif",
    },
    heroCta: {
      marginTop: "40px",
      display: "inline-block",
    },
    placeholderImage: {
      backgroundColor: "transparent",
      height: "400px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "300",
      color: "rgba(255, 255, 255, 0.5)",
      border: "1px dashed rgba(255, 255, 255, 0.3)",
    },

    // New Feature Cards Section
    featureCardsSection: {
      margin: "120px 0",
    },
    featureCardsGrid: {
      display: "flex",
      justifyContent: "space-between",
      gap: "30px",
    },
    featureCard: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    featureImageContainer: {
      width: "100%",
      height: "450px",
      marginBottom: "2px",
      overflow: "hidden",
      backgroundColor: "#f5f5f5",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      borderRadius: "15px",
    },
    featureImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    featureTitle: {
      fontSize: "1.5rem",
      fontWeight: "500",
      marginBottom: "16px",
      textAlign: "center",
      fontFamily: "Inter, sans-serif",
    },
    featureText: {
      fontSize: "0.95rem",
      lineHeight: "1.6",
      textAlign: "center",
      color: "#555",
      fontFamily: "Inter, sans-serif",
    },
    featureImagePlaceholder: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#888",
      fontSize: "1rem",
    },

    // Features section
    features: {
      display: "flex",
      justifyContent: "space-between",
      margin: "120px 0",
    },
    featureOrange: {
      flex: "0 0 30%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "300px",
      fontSize: "2.25rem",
      fontWeight: "400",
      fontFamily: "Inter, sans-serif",
      color: "#000000",
      backgroundColor: "#FFD8B1",
    },
    featurePlant: {
      flex: "0 0 30%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "300px",
      fontSize: "2.25rem",
      fontWeight: "400",
      fontFamily: "Inter, sans-serif",
      color: "#FFFFFF",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      position: "relative",
      overflow: "hidden",
    },
    featurePlantPlaceholder: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "rgba(255, 255, 255, 0.5)",
      fontSize: "1rem",
      zIndex: "-1",
    },
    featurePurple: {
      flex: "0 0 30%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "300px",
      fontSize: "2.25rem",
      fontWeight: "400",
      fontFamily: "Inter, sans-serif",
      color: "#000000",
      backgroundColor: "#D8D0FF",
    },

    // Product update section
    productUpdate: {
      textAlign: "center",
      margin: "160px 0",
    },
    productUpdateHeading: {
      fontSize: "2.25rem",
      fontWeight: "400",
      maxWidth: "800px",
      margin: "0 auto",
      lineHeight: "1.3",
      fontFamily: "Inter, sans-serif",
    },

    // Footer
    footer: {
      display: "flex",
      justifyContent: "space-between",
      padding: "40px 0",
      fontSize: "0.85rem",
      opacity: "0.8",
      fontFamily: "Inter, sans-serif",
    },
    footerLink: {
      color: "#FFFFFF",
      textDecoration: "none",
      marginLeft: "20px",
      fontFamily: "Inter, sans-serif",
    },
  };

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.contentContainer}>
          <header style={styles.header}>
            <div style={styles.logo}>MichaelAbouZeid</div>
            <nav>
              <ul style={styles.nav}>
                <li style={styles.navItem}>
                  <a href="#product" style={styles.navLink}>
                    Product
                  </a>
                </li>
                <li style={styles.navItem}>
                  <a href="#service" style={styles.navLink}>
                    Service
                  </a>
                </li>
                <li style={styles.navItem}>
                  <a href="#research" style={styles.navLink}>
                    Research
                  </a>
                </li>
                <li style={styles.navItem}>
                  <a href="#contact" style={styles.navLink}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </header>

          <section style={styles.hero}>
            <div style={styles.heroContent}>
              <h1 style={styles.heroTitle}>
                Bringing AI research to the forefront of human experiences 
              </h1>
              <p style={styles.subtitle}>
                Beyond artificial. Intelligence that feels symbiotic and innate
              </p>
              <a
                href="#demo"
                style={{ ...styles.ctaButton, ...styles.heroCta }}
              >
                Explore
              </a>
            </div>
            <img src="/landing1.jpeg" alt="none" style={styles.heroImg} />
          </section>
        </div>
      </div>

      <div style={styles.whiteSection}>
        <div style={styles.contentContainer}>
          {/* New Feature Cards Section with 3 Images and Text */}
          <section style={styles.featureCardsSection}>
            <div style={styles.featureCardsGrid}>
              {/* Feature Card 1 */}
              <div style={styles.featureCard}>
                <div style={styles.featureImageContainer}>
                  <img
                    src="/imageL.jpeg"
                    alt="Feature 1"
                    style={styles.featureImage}
                  />
                  <div style={styles.featureImagePlaceholder}></div>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div style={styles.featureCard}>
                <div style={styles.featureImageContainer}>
                  <img
                    src="/imageM.jpeg"
                    alt="Feature 2"
                    style={styles.featureImage}
                  />
                  <div style={styles.featureImagePlaceholder}></div>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div style={styles.featureCard}>
                <div style={styles.featureImageContainer}>
                  <img
                    src="/imageR.jpeg"
                    alt="Feature 3"
                    style={styles.featureImage}
                  />
                  <div style={styles.featureImagePlaceholder}></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div style={styles.container}>
        <div style={styles.contentContainer}>
          <section style={styles.features}>
            <div style={styles.featureOrange}></div>
            <div style={styles.featurePlant}><div style={styles.featurePlantPlaceholder}>
                Plant Imagery Placeholder
              </div>
            </div>
            <div style={styles.featurePurple}></div>
          </section>

          <section style={styles.productUpdate}>
            <h2 style={styles.productUpdateHeading}>
              Website under developement
            </h2>
          </section>

          <footer style={styles.footer}>
            <div>2025 MichaelAbouZeid</div>
            <div>
              <a href="#privacy" style={styles.footerLink}>
                Privacy Policy
              </a>
              <a href="#impressum" style={styles.footerLink}>
                Impressum
              </a>
              <a href="#data" style={styles.footerLink}>
                Data Processing Agreement
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
