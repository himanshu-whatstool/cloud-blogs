import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

function OtpBox() {
  return (
    <div>
      <Container>
        <Link to={"/"}><button className="btn btn-sm border border-sm mt-4">Home</button></Link>
        <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, saepe at quaerat perspiciatis quibusdam atque repellat quo aspernatur est ad eius molestias deleniti excepturi.</p>
      </Container>
    </div>
  )
}

export default OtpBox


















