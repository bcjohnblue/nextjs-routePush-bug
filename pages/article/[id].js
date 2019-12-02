import React from 'react'

const Article = () => {
  return (
    <p>This page will trigger server-side rendering</p>
  )
}

Article.getInitialProps = async (props) => {
  console.log('Article [id] page getInitialProps');
  return {}
}

export default Article