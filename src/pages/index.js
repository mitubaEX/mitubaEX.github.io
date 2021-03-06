import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <img src="https://avatars0.githubusercontent.com/u/12068535?s=400&u=2f780ad17c1559d5aff515638aebcb49b9098070&v=4" />
    <h1>Information</h1>
    <div>
      <ul>
        <li>
          <Link to="/About/">About</Link>
        </li>
        <li>
          <Link to="/Technique-of-mitubaEX/">Technique of mitubaEX</Link>
        </li>
        <li>
          <Link to="/Hobby/">Hobby</Link>
        </li>
      </ul>
    </div>
    <h1>Output sites</h1>
    <div>
      <ul>
        <li>
          <i class="fa fa-github" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/mitubaEX"
            style={{ marginLeft: '5px' }}
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://qiita.com/mitubaEX328"
          >
            Qiita
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mitubaex.hatenablog.com/"
          >
            HatenaBlog
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://speakerdeck.com/mitubaex"
          >
            SpeakerDeck
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://note.mu/mitubaex"
          >
            note
          </a>
        </li>
      </ul>
    </div>
    <h1>SNS</h1>
    <div>
      <ul>
        <li>
          <i class="fa fa-twitter-square" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/mitubaEX"
            style={{ marginLeft: '5px' }}
          >
            Twitter
          </a>
        </li>
        <li>
          <i class="fa fa-facebook-official" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/profile.php?id=100011351184365"
            style={{ marginLeft: '5px' }}
          >
            Facebook
          </a>
        </li>
      </ul>
    </div>
  </Layout>
);

export default IndexPage;
