import * as React from 'react'
import PageTemplate from '../../templates/PageTemplate'
import Header from '../../organisms/Header'
// import { WidthWrapper } from '../../atoms/Wrappers'
import { WidthWrapper, Section } from '../../atoms/Wrappers'
import Footer from '../../organisms/Footer'

interface Props {}

const SignInPage: React.SFC<any> = (props: Props) => {
  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    >
      <WidthWrapper>
        <Section>
          <div>SignInPageですね</div>
        </Section>
      </WidthWrapper>
    </PageTemplate>
  )
}

export default SignInPage
