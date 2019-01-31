import * as React from 'react'
import { PageTemplate } from 'components/templates/PageTemplate'
import { Header } from 'containers/Header'
import { Footer } from 'components/organisms/Footer'

export const HomePage: React.SFC = props => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <div>HomePageですね</div>
    </PageTemplate>
  )
}
