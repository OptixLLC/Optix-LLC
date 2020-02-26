const Nav = props => (
  <nav>
    <div className="nav">
      {props.children}
    </div>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Roboto+Mono|Share+Tech+Mono&display=swap');
      ul {
        border-radius: 5px;
        border: none;
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #f2f2f2;
        border: 1px solid #ddd;
      }

      li {
        float: left;
      }

      li a {
        color: black;
        display: block;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-family: 'Share Tech Mono', monospace;
      }

      li a:hover:not(.active) {
        background-color: #ccc;
      }

      .active {
        background-color: #ccc;
      }

      .underline {
        text-decoration: underline;
      }
    `}</style>
  </nav>
);

export default Nav;
