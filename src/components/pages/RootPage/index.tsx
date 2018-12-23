import * as React from 'react'
import PageTemplate from '../../templates/PageTemplate'
import Header from '../../organisms/Header'
// import Footer from '../../organisms/Footer'

const RootPage: React.SFC<any> = (props) => {
  return (
    <PageTemplate
      // header={<Header />}
      // footer={<Footer />}
      header={<header>header</header>}
      // footer={<footer>footer</footer>}
    >
    {
      // <section>Children</section>
    }
    </PageTemplate>
  )
}

export default RootPage

