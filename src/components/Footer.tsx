const Footer = () => {
  return (
    <div className="container position-absolute bottom-0 end-0">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-1 text-muted">© 2024 linde group.</p>
        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <svg className="bi me-2" width="20" height="10"></svg>
        </a>
      </footer>
    </div>
  );
};

export default Footer;
