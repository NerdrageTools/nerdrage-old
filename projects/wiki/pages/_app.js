import App, { Container } from 'next/app'
import React from 'react'
import Layout from '@/components/Layout'
import '@/styles/all.scss'

export default class Wiki extends App {
  render = () => {
    const { Component, pageProps } = this.props // eslint-disable-line
    const { children, ...props } = pageProps
    return (
      <Container className="wiki">
        <Layout>
          <Component {...props} />
        </Layout>
      </Container>
    )
  }
}
