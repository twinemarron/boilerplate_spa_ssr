import * as React from 'react'
import { PageTemplate } from 'components/templates/PageTemplate'
import { Header } from 'containers/Header'
import { Footer } from 'components/organisms/Footer'
import { WidthWrapper, Section } from 'components/atoms/Wrappers'
import { Heading1 } from 'components/atoms/Headings'

export const RootPage: React.SFC = props => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <WidthWrapper>
        <Section>
          <Heading1 text="Root Page" />
          <div>Root</div>
        </Section>
      </WidthWrapper>
    </PageTemplate>
  )
}
