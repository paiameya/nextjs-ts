import Footer from "./Footer";

export default function HeaderPage() {
  return (
    <div>
      <header style={styles.header}>
        <h1 style={styles.logo}>My Website</h1>
        <nav style={styles.nav}>
          <a href="/" style={styles.link}>Home</a>
          <a href="/about" style={styles.link}>About</a>
          <a href="/contact" style={styles.link}>Contact</a>
        </nav>
      </header>
      <Footer/>
    </div>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '10px 20px',
    color: '#fff',
  },
  logo: {
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  }
};