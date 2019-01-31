import * as React from 'react'
import { PageTemplate } from 'components/templates/PageTemplate'
import { Header } from 'containers/Header'
import { WidthWrapper, Section } from 'components/atoms/Wrappers'
import { Footer } from 'components/organisms/Footer'

export const SignInPage: React.SFC = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <WidthWrapper>
        <Section>
          <div>SignInPageですね</div>
        </Section>
      </WidthWrapper>
    </PageTemplate>
  )
}
