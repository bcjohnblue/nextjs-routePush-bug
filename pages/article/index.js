import React from 'react'

const Article = () => {
  return (
    <p>This page will trigger client-side rendering</p>
  )
}

Article.getInitialProps = async (props) => {
  console.log('Article page getInitialProps');
  return {}
}

export default Article