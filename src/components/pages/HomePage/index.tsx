import * as React from 'react'
import PageTemplate from '../../templates/PageTemplate'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'

const HomePage: React.SFC<any> = (props) => {
  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    >
      <div>iHomePageですね</div>
    </PageTemplate>
  )
}

export default HomePage

