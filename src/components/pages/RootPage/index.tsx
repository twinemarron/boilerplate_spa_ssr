import * as React from 'react'
import PageTemplate from '../../templates/PageTemplate'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'

const RootPage: React.SFC<any> = (props) => {
  console.log('props: ', props)
  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    >
      <section>Root</section>
    </PageTemplate>
  )
}

export default RootPage

