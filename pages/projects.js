import Data from '../modules/data';
import Nav from '../modules/nav';
import Link from 'next/link';
import fileData from '../data.json';

var data = "<link rel='stylesheet' href='/card.css'>";
var i = 0;
if (fileData.projects.length > 0) {
  while (i < fileData.projects.length) {
    data = data + '<div class="column"><a href="https://github.com/OptixLLC/' + fileData.projects[i].name + '"><div class="card"><h3>' + fileData.projects[i].name + '</h3><p>' + fileData.projects[i].sdef + '</p></div></a></div>';
    i = i + 1;
  }
} else {
  data = data + "There are no projects!";
}

export default function Index() {
  return (
    <html>
      <body>
        <Nav>
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/projects"><a className="active"><span className="underline">Projects</span></a></Link></li>
            <li><Link href="/products"><a>Products</a></Link></li>
            <li><Link href="/team"><a>Team</a></Link></li>
          </ul>
        </Nav>
        <Data>
          <div className="content" dangerouslySetInnerHTML={{__html: data}}></div>
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
