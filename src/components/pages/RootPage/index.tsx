import * as React from 'react'
import PageTemplate from '../../templates/PageTemplate'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'
import { WidthWrapper, Section } from '../../atoms/Wrappers'
import { Heading1 } from '../../atoms/Headings'

const RootPage: React.SFC = () => {
  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    >
      <WidthWrapper>
        <Section>
          <Heading1 text="Root Page" />
          <div>Root</div>
        </Section>
      </WidthWrapper>
    </PageTemplate>
  )
}

export default RootPage

