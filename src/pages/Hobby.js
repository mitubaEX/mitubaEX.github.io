import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Hobby" />
    <h1>Hobby</h1>
    <p>My hobby is Japanese animation and VTuber(Broadcaster of YouTube)</p>
    <h3>VTuber</h3>
    <div>
      <ul>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCeLzT-7b2PBcunJplmWtoDg">HoneyStrap</a></li>
      </ul>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
