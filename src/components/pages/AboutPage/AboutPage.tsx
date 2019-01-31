import * as React from 'react'
import { PageTemplate } from 'components/templates/PageTemplate'
import { Header } from 'containers/Header'
import { Footer } from 'components/organisms/Footer'
import { WidthWrapper } from 'components/atoms/Wrappers'

export const AboutPage: React.SFC = props => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <WidthWrapper>
        <div>AboutPageですね</div>
      </WidthWrapper>
    </PageTemplate>
  )
}
