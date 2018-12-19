import * as React from 'react'
import PageTemplate from '../../templates/PageTemplate'
import Header from '../../organisms/Header'

const HomePage: React.SFC<any> = (props) => {
  // return <div>HomePage</div>
  return (
    <PageTemplate
      header={<Header />}
      footer={<div>Footer</div>}
    >
      {
        // <div>children</div>
      }
    </PageTemplate>
  )
}

export default HomePage

