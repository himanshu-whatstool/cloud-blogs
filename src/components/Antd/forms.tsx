
import { Form, Input } from 'antd';

const FormsAntd: React.FC = () => {
  return (
    <div>
      <Form>
        <Form.Item name={['user', 'introduction']} label="Introduction">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </div>
  )
}

export default FormsAntd





