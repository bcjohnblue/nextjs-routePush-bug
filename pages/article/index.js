import React from 'react'

const Article = () => {
  return (
    <>
      <p>1. Article page (by query)</p>
      <p>2. Article page (by param with shallow)</p>
    </>
  )
}

Article.getInitialProps = async (props) => {
  console.log(props);
  return {}
}

export default Article