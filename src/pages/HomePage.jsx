import { Helmet } from 'react-helmet'

import Button from "../components/button"

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>React Application: Homepage</title>
      </Helmet>

      <h1>Homepage</h1>

      <Button>Test Button</Button>
    </>
  )
}

export default HomePage
