import * as React from 'react'
import { Dispatch } from 'redux'
import PageTemplate from '../../templates/PageTemplate'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'
import { WidthWrapper, Section } from '../../atoms/Wrappers'
import { Heading1 } from '../../atoms/Headings'
import {
  connect,
  MapStateToPropsParam,
  MapDispatchToPropsParam,
} from 'react-redux'
import { State } from '../../../reducers'

const RootPage: React.SFC = props => {
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

const mapStateToProps = (state: State, b: any) => {
  return state
}

export default connect(mapStateToProps)(RootPage)
