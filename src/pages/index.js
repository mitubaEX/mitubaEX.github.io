import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <img src="https://avatars0.githubusercontent.com/u/12068535?s=400&u=2f780ad17c1559d5aff515638aebcb49b9098070&v=4"/>
    <h1>Topics</h1>
    <div>
      <ul>
        <li><Link to="/About/">About</Link></li>
        <li><Link to="/Technique-of-mitubaEX/">Technique of mitubaEX</Link></li>
        <li><Link to="/Hobby/">Hobby</Link></li>
      </ul>
    </div>
    <h1>Output sites</h1>
    <div>
      <ul>
        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/mitubaEX">GitHub</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://qiita.com/mitubaEX114514">Qiita</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://mitubaex.hatenablog.com/">HatenaBlog</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://note.mu/mitubaex">note</a></li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
