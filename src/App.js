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

    // Description section
    descriptionSection: {
      margin: "160px 0",
    },
    mainDescription: {
      fontSize: "1.5rem",
      fontWeight: "400",
      marginBottom: "60px",
      lineHeight: "1.4",
      fontFamily: "Inter, sans-serif",
    },
    columns: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "80px",
    },
    column: {
      flex: "0 0 48%",
      fontSize: "0.95rem",
      fontWeight: "300",
      lineHeight: "1.7",
      fontFamily: "Inter, sans-serif",
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
            <div style={styles.logo}></div>
            <nav>
              <ul style={styles.nav}>
                <li style={styles.navItem}>
                  <a href="#product" style={styles.navLink}>
                    Product
                  </a>
                </li>
                <li style={styles.navItem}>
                  <a href="#services" style={styles.navLink}>
                    Services
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
                Where intelligence meets human intuition
              </h1>
              <p style={styles.subtitle}>
                Beyond artificial. Intelligence that feels symbiotic and innate
              </p>
              <a
                href="#demo"
                style={{ ...styles.ctaButton, ...styles.heroCta }}
              >
                get a demo
              </a>
            </div>
            <div style={styles.heroImage}>
              <div style={styles.placeholderImage}>
                Flower Image Placeholder
              </div>
            </div>
          </section>
        </div>
      </div>

      <div style={styles.whiteSection}>
        <div style={styles.contentContainer}>
          <section style={styles.descriptionSection}>
            <div style={styles.mainDescription}>
              Website under developement. Placeholdr text: Our agents
              autonomously handle a range of tasks from drafting and reviewing
              documents to triaging incoming requests and completing compliance
              forms.
            </div>

            <div style={styles.columns}>
              <div style={styles.column}>
                Website under developement. Placeholdr text: Everyone is
                building more software. More platforms. More dashboards. We've
                built something different. At Your Name, we're not adding more
                tools. Instead, we enable you to deploy autonomous agents that
                take on your overflow and repetitive work.
              </div>
              <div style={styles.column}>
                Website under developement. Placeholdr text: Our agents triage
                inbound requests. Draft and review content. Complete security
                forms. And they get better every time they work. You won't see
                them. You'll just feel the lift — in time, in focus, in
                momentum. If that's the kind of change you've been waiting for,
                let's talk.
              </div>
            </div>
          </section>
        </div>
      </div>

      <div style={styles.container}>
        <div style={styles.contentContainer}>
          <section style={styles.features}>
            <div style={styles.featureOrange}>Proactive</div>
            <div style={styles.featurePlant}>
              Autonomous
              <div style={styles.featurePlantPlaceholder}>
                Plant Imagery Placeholder
              </div>
            </div>
            <div style={styles.featurePurple}>Steerable</div>
          </section>

          <section style={styles.productUpdate}>
            <h2 style={styles.productUpdateHeading}>
              Website under developement Stay tuned.
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
