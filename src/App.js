import React, { useState, useEffect, useCallback } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [logoPosition, setLogoPosition] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatingElements, setFloatingElements] = useState([]);
  const [time, setTime] = useState(0);

  // Color palette
  const colors = [
    'rgba(147, 51, 234, 0.5)',  // Purple
    'rgba(219, 39, 119, 0.5)',  // Pink
    'rgba(255, 255, 255, 0.5)', // White
    'rgba(76, 29, 149, 0.5)',   // Deep purple
  ];

  const elements = Array(12).fill(null);

  // Autonomous animation function
  const animate = useCallback(() => {
    setTime(prev => prev + 0.005); // Control speed
    
    setFloatingElements(prev => prev.map((el, index) => {
      // Complex autonomous movement patterns
      const wave = Math.sin(time + el.phase) * el.amplitude;
      
      const spiral = {
        x: Math.cos(time * 0.5 + index) * 30,
        y: Math.sin(time * 0.5 + index) * 30
      };
      
      const lissajous = {
        x: Math.sin(time * 2 + index) * 20,
        y: Math.cos(time * 3 + index) * 20
      };

      // Secondary wave pattern
      const secondaryWave = {
        x: Math.sin(time * 0.3 + el.phase) * 15,
        y: Math.cos(time * 0.3 + el.phase) * 15
      };

      // Color transitions
      const colorIndex = Math.floor(time + index) % colors.length;
      const nextColorIndex = (colorIndex + 1) % colors.length;
      
      const gradientAngle = (time * 50) % 360;
      const gradient = `linear-gradient(
        ${gradientAngle}deg,
        ${colors[colorIndex]},
        ${colors[nextColorIndex]}
      )`;

      return {
        ...el,
        x: el.baseX + spiral.x + lissajous.x + wave + secondaryWave.x,
        y: el.baseY + spiral.y + lissajous.y + secondaryWave.y,
        rotation: el.rotation + Math.sin(time + index) * 2,
        scale: 0.5 + Math.sin(time * 0.5 + el.phase) * 0.2,
        background: gradient
      };
    }));
  }, [time]);

  // Animation loop
  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      animate();
    });
    return () => cancelAnimationFrame(animationFrame);
  }, [time, animate]);

  // Initialize elements
  useEffect(() => {
    const initialElements = elements.map((_, index) => ({
      id: index,
      baseX: 50 + Math.cos((index / elements.length) * Math.PI * 2) * 30,
      baseY: 50 + Math.sin((index / elements.length) * Math.PI * 2) * 30,
      rotation: (index / elements.length) * 360,
      scale: 0.5 + Math.random() * 0.5,
      phase: index * (Math.PI / 6),
      amplitude: 20 + Math.random() * 10,
      size: 100 + Math.random() * 100
    }));
    setFloatingElements(initialElements);
  }, []);

  // Minimal mouse handling for logo only
  const handleMouseMove = (e) => {
    const mouseX = (e.clientX / window.innerWidth);
    const mouseY = (e.clientY / window.innerHeight);
    setMousePosition({ x: mouseX * 150, y: mouseY * 150 });
  };

  const handleLogoMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setLogoPosition({ x: x * 0.8, y: y * 0.8 });
  };

  const styles = {
    container: {
      backgroundColor: isDarkMode ? '#0F0F0F' : '#FFFFFF',
      color: isDarkMode ? '#FFFFFF' : '#0F0F0F',
      minHeight: '100vh',
      padding: '40px',
      transition: 'all 0.3s ease',
      backgroundImage: isDarkMode 
        ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.2), #0F0F0F 50%)`
        : `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(219, 39, 119, 0.1), #FFFFFF 50%)`,
      position: 'relative',
      overflow: 'hidden'
    },
    backgroundLayer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      overflow: 'hidden'
    },
    content: {
      position: 'relative',
      zIndex: 2
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '80px'
    },
    logoContainer: {
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    },
    logo: {
      width: '40px',
      height: '40px',
      backgroundColor: '#FF5722',
      borderRadius: '50%',
      transform: `translate(${logoPosition.x}px, ${logoPosition.y}px)`,
      transition: 'transform 0.1s ease'
    },
    nav: {
      display: 'flex',
      gap: '40px',
      alignItems: 'center'
    },
    link: {
      color: isDarkMode ? '#FFFFFF' : '#0F0F0F',
      textDecoration: 'none',
      fontSize: '18px',
      fontWeight: '400',
      fontFamily: 'Inter, sans-serif'
    },
    themeToggle: {
      background: 'none',
      border: 'none',
      color: isDarkMode ? '#FFFFFF' : '#0F0F0F',
      fontSize: '18px',
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'Inter, sans-serif'
    },
    titleSection: {
      marginBottom: '40px'
    },
    title: {
      fontSize: '64px',
      lineHeight: '1.1',
      fontFamily: 'Inter, sans-serif',
      fontWeight: '600',
      marginBottom: '20px'
    },
    floatingShape: {
      position: 'absolute',
      borderRadius: '50%',
      mixBlendMode: 'screen',
      backdropFilter: 'blur(8px)',
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 0 20px rgba(147, 51, 234, 0.2)'
    }
  };

  // Add keyframe animation for subtle pulsing
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0% { transform: scale(1) rotate(0deg); }
        50% { transform: scale(1.1) rotate(180deg); }
        100% { transform: scale(1) rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div style={styles.container} onMouseMove={handleMouseMove}>
      <div style={styles.backgroundLayer}>
        {floatingElements.map(el => (
          <div
            key={el.id}
            style={{
              ...styles.floatingShape,
              left: `${el.x}%`,
              top: `${el.y}%`,
              width: `${el.size}px`,
              height: `${el.size}px`,
              transform: `rotate(${el.rotation}deg) scale(${el.scale})`,
              background: el.background,
              animation: `pulse ${8 + el.id}s infinite`
            }}
          />
        ))}
      </div>

      <div style={styles.content}>
        <header style={styles.header}>
          <div 
            style={styles.logoContainer}
            onMouseMove={handleLogoMouseMove}
            onMouseLeave={() => setLogoPosition({ x: 0, y: 0 })}
          >
            <div style={styles.logo}></div>
          </div>
          <nav style={styles.nav}>
            <a href="#about" style={styles.link}>About</a>
            <a href="#journal" style={styles.link}>Journal</a>
            <a href="#contact" style={styles.link}>Contact</a>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              style={styles.themeToggle}
            >
              {isDarkMode ? '+' : '-'}
            </button>
          </nav>
        </header>

        <div style={styles.titleSection}>
          <h1 style={styles.title}>Michael</h1>
          <h1 style={styles.title}></h1>
        </div>
      </div>
    </div>
  );
}

export default App;