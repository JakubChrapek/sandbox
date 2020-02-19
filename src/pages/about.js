import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <h1>About page</h1>
    <p>Something to write here</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
)