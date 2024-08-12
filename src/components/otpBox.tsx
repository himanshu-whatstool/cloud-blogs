import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons"
import { useRef, useState } from "react"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Form, Input } from 'antd';


function OtpBox() {

  const [password, setPassword] = useState(true)
  const handlePassword = () => setPassword(!password)

  const [text, setText] = useState("")
  const handleSetText = (e: any) => setText(e)

  const textAreaRef = useRef(null)
  const handleCopy = () => navigator.clipboard.writeText(text)
  const handleClear = () => setText("")

  const handleUpper = () => setText(text.toUpperCase())
  const handleLower = () => setText(text.toLowerCase())

  return (
    <div>
      <Container>
        <Link to={"/"}><button className="btn btn-sm border border-sm mt-4 mb-3">Home</button></Link>
        <h4>Enter the text to analyze below</h4>
        <div className="input-group w-75">
          <input type={password ? "password" : "text"} className="form-control" placeholder="password" />
          <span className="input-group-text" onClick={handlePassword}>{password ? <EyeOutlined /> : <EyeInvisibleOutlined />}</span>
        </div>

        <Form.Item>
          <Input.TextArea ref={textAreaRef} value={text} onChange={(e) => handleSetText(e.target.value)} placeholder="Enter Text" rows={4} className="w-75 mt-4" />
        </Form.Item>

        <div className="mt-3">
          <button onClick={handleUpper} className="btn btn-sm btn-primary">Convert to UpperCase</button>
          <button onClick={handleLower} className="btn btn-sm ms-2 btn-primary">Convert to LowerCase</button>
          <button onClick={handleClear} className="btn btn-sm ms-2 btn-primary">Clear Text</button>
          <button onClick={handleCopy} className="btn btn-sm ms-2 btn-primary">Copy Text</button>
        </div>

        <h6 className="mt-3">Preview</h6>
        <small>{text}</small>

      </Container>
    </div>
  )
}

export default OtpBox


















