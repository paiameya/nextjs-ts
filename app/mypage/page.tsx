// export default function page(){
//     return <div>My Page </div>
// }

export default function HeaderPage() {
  return (
    <div>
      <header style={styles.header}>
        <h1 style={styles.logo}>My Website</h1>
        <button>search .....</button>
        <nav style={styles.nav}>
          <a href="/" style={styles.link}>Home</a>
          <a href="/about" style={styles.link}>About</a>
          <a href="/contact" style={styles.link}>Contact</a>
        </nav>
      </header>
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
  
  link: {
    color: 'black',
    textDecoration: 'none',
  }
};