export const Footer = () => {
  return (
    <footer className="page-footer #039be5 light-blue darken-1">
      <div className="container"></div>
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
};
