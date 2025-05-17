import React from "react";

function App() {
  const styles = {
    container: {
      backgroundColor: "#FFFFFF",
      color: "#0F0F0F",
      minHeight: "100vh",
      padding: "40px",
    },
    content: {
      position: "relative",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "80px",
    },
    logoContainer: {
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      width: "40px",
      height: "40px",
      backgroundColor: "#FF5722",
      borderRadius: "50%",
    },
    nav: {
      display: "flex",
      gap: "40px",
      alignItems: "center",
    },
    link: {
      color: "#0F0F0F",
      textDecoration: "none",
      fontSize: "18px",
      fontWeight: "400",
      fontFamily: "Inter, sans-serif",
    },
    titleSection: {
      marginBottom: "40px",
    },
    title: {
      fontSize: "64px",
      lineHeight: "1.1",
      fontFamily: "Inter, sans-serif",
      fontWeight: "600",
      marginBottom: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <header style={styles.header}>
          <div style={styles.logoContainer}>
            <div style={styles.logo}></div>
          </div>
          <nav style={styles.nav}>
            <a href="#about" style={styles.link}>
              About
            </a>
            <a href="#journal" style={styles.link}>
              Journal
            </a>
            <a href="#contact" style={styles.link}>
              Contact
            </a>
          </nav>
        </header>

        <div style={styles.titleSection}>
          <h1 style={styles.title}>Mikey Mouse final1</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
