import { useEffect, useState } from "react"
import { Container, Row, Spinner } from "react-bootstrap"


export const ScrollList = () => {

  const [todo, setTodo] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response Network was not ok ")
        }
        return response.json()
      })
      .then((todo) => {
        setTodo(todo)
        setLoading(false)
      })
      .catch((error) => {
        setError(error);
        setLoading(false)
      })
  })

  if (loading) {
    return (
      <div><Spinner animation="grow" variant="info" /></div>
    )
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  interface ApiPost {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }

  return (
    <section>
      <Container>
        <Row>
          {todo.map((v: ApiPost) => {
            return (
              <section key={v.id}>
                <div style={{ border: '1px solid #f0f2f8', margin: '2px' }} className="rounded p-1 ">
                  <p>{v.title}</p>
                </div>
              </section>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}










