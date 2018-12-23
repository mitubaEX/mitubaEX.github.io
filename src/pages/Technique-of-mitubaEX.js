import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Technique of mitubaEX" />
    <h1>Technique of mitubaEX</h1>

    <h3>Environment</h3>
    <div>
      <ul>
        <li>OS: Mac OS, Arch Linux</li>
        <li>Shell: Zsh</li>
        <li>Editor: Neovim</li>
        <li>Other: Alacritty, tmux</li>
        <li>dotfiles: <a target="_blank" rel="noopener noreferrer" href="https://github.com/mitubaEX/dotfiles">dotfiles</a></li>
      </ul>
    </div>

    <h3>Language</h3>
    <div>
      <ul>
        <li>JavaScript(React)</li>
        <li>Go</li>
        <li>Rust</li>
        <li>Python</li>
        <li>Shell Script</li>
        <li>Haskell</li>
      </ul>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
