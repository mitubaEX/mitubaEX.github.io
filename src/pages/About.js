import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>My name is Nakamura Jun. Nickname is mitubaEX.</p>
    <h3>Information</h3>
    <div>
      <ul>
        <li>Birthday: 1994/08/13</li>
        <li>
          Graduated university:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.kyoto-su.ac.jp/"
          >
            Kyoto Sangyo Univ
          </a>
        </li>
        <li>
          Joined company:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.freee.co.jp/index2.html?utm_expid=.tuOe0TjJQu6tKnUuHZn_Og.1&utm_referrer=https%3A%2F%2Fwww.google.com%2F"
          >
            freee
          </a>
        </li>
      </ul>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
