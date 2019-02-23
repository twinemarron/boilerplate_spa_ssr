import * as React from 'react'
import { PageTemplate } from 'components/templates/PageTemplate'
import { Header } from 'containers/Header'
import { Footer } from 'components/organisms/Footer'
import { WidthWrapper, Section } from 'components/atoms/Wrappers'
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
} from 'components/atoms/Headings'
import { MyEditor } from 'components/molecules/MyEditor'

export const RootPage: React.SFC = props => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <WidthWrapper>
        <Section>
          <Heading1 text="Root Page" />
          <Heading2 text="Heading2 ですね" />
          <div>
            <p>ここはパラグラフです。テキストをつらつら書いていきます。</p>
            <p>ここはパラグラフです。テキストをつらつら書いていきます。</p>
          </div>
          <Heading3 text="Heading3 ですね" />
          <div>
            <p>ここはパラグラフです。テキストをつらつら書いていきます。</p>
            <p>ここはパラグラフです。テキストをつらつら書いていきます。</p>
          </div>
          <Heading4 text="Heading4 ですね" />
          <div>
            <p>ここはパラグラフです。テキストをつらつら書いていきます。</p>
            <p>ここはパラグラフです。テキストをつらつら書いていきます。</p>
          </div>
        </Section>
        <Section>
          <Heading1 text="Root Page" />
          <Heading2 text="Heading2 ですね" />
          <div>
            <p>ここはパラグラフです。テキストをつらつら書いていきます。</p>
            <p>ここはパラグラフです。テキストをつらつら書いていきます。</p>
          </div>
        </Section>
        <Section>
          <MyEditor />
        </Section>
      </WidthWrapper>
    </PageTemplate>
  )
}
