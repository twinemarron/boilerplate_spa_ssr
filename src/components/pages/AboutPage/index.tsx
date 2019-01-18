import * as React from 'react'
import PageTemplate from '../../templates/PageTemplate'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'
import { WidthWrapper } from '../../atoms/Wrappers'

const AboutPage: React.SFC = (props) => {
  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    >
      <WidthWrapper>
        <div>AboutPageですね</div>
      </WidthWrapper>
    </PageTemplate>
  )
}

export default AboutPage


