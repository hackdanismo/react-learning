import { Helmet } from "react-helmet"
import { Button } from "@hackdanismo/react-component-library"

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>React Application: About</title>
      </Helmet>

      <h1>About</h1>

      {/* This is a Button component from @hackdanismo/react-component-library */}
      <Button />
    </>
  )
}

export default AboutPage