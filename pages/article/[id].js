import React from 'react'

const Article = () => {
  return (
    <p>Article page (by param)</p>
  )
}

Article.getInitialProps = async (props) => {
  console.log(props);
  return {}
}

export default Article