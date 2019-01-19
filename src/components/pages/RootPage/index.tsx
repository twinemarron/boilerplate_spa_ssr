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
  console.log('RootPage props: ', props)
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

// export default RootPage

const mapStateToProps = (state: State, b: any) => {
  console.log('RootPage mapStateToProps state: ', state)
  console.log('b: ', b)
  return state
}
const mapDispatchToProps = (dispatch: Dispatch, b: any) => {
  console.log('dispatch: ', dispatch)
  console.log('b: ', b)
  // return dispatch
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootPage)
