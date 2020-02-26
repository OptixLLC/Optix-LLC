import Data from '../modules/data';
import Nav from '../modules/nav';
import Link from 'next/link';

export default function Index() {
  return (
    <html>
      <body>
        <Nav>
          <ul>
            <li><Link href="/"><a className="active"><span className="underline">Home</span></a></Link></li>
            <li><Link href="/projects"><a>Projects</a></Link></li>
            <li><Link href="/products"><a>Products</a></Link></li>
          </ul>
        </Nav>
        <Data>
          <div className="center">
            Optix LLC<br/>
            Making Hydra & Nuclear.
          </div>
        </Data>
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

          .center {
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
          }
        `}</style>
      </body>
    </html>
  );
}
