const Data = props => (
  <data>
    <title>Optix</title>
    <div className="main">
      {props.children}
    </div>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Roboto+Mono|Share+Tech+Mono&display=swap');
      .main {
        margin: 50px;
        font-family: 'Roboto Mono', monospace;
      }
    `}</style>
  </data>
);

export default Data;
