import Footer from "./footer"
import Home from "./Home"
import Login from "./Login";
export default function HeaderPage() {
  return (
    <div>
      <header style={styles.header}>
        <h1 style={styles.logo}>My Website</h1>
        <button style={styles.search}>search.....</button>
        <nav style={styles.nav}>
          <a href="/" style={styles.link}>Home</a>
          <a href="/about" style={styles.link}>About</a>
          <a href="/contact" style={styles.link}>Contact</a>
        </nav>
      </header>
      <Home />
      <Login />
      <Footer />
    </div>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '10px 20px',
    color: 'black',
  },
  logo: {
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },

  search: {
    border:'1px solid black',
    width:'200px',
  },
  
  link: {
    color: 'black',
    textDecoration: 'none',
  }
};