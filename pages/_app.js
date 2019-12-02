import React from 'react'
import App from 'next/app'
import Link from 'next/link'
import Router from 'next/router'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <>
        <nav>
          <style jsx>{`
            a {
              margin: 0 10px 0 0;
            }
          `}</style>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <button onClick={() => Router.push('/article?id=1')}>go to article page (by query)</button>
          <button onClick={() => Router.push('/article/1')}>go to article page (by param)</button>
          <button onClick={() => Router.push('/article?id=1', '/article/1', { shallow: true })}>go to article page (by param with shallow)</button>
        </nav>
        <Component {...pageProps} />
      </>
    )
  }
}