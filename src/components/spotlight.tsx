import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function SpotComp() {
  return (
    <section>
      <SpotAPI />
    </section>
  )
}

function SpotAPI() {

  const [data, setData] = useState([])
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(false)

  const handleInputChange = (event: any) => {
    setQuery(event.target.value);
  }

  const filterResults = () => {
    const filtered = data.filter((result: cloud) => result.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredResults(filtered);
  };

  const apiCall = "https://jsonplaceholder.typicode.com/users"

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiCall)
      const result = await response.json()
      setData(result)
      // console.log(result);

    } catch (error) {
      console.log("API not responded", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { fetchData() }, [])

  useEffect(() => { filterResults() }, [query, data])

  interface cloud {
    name: string,
    username: string
  }

  return (
    <main>
      <Link to={"/otp-box"}><button className="btn btn-sm border border-sm mt-4 me-3 float-end">OTP</button></Link>
      <center>
        <div className="mt-4" style={{ display: 'flex', flexDirection: 'row', border: '1px solid #616874', borderRadius: '8px', width: '40%' }}>
          <span className="p-2"><SearchOutlined className="text-dark" />&nbsp;&nbsp;|</span>
          <input value={query} onChange={handleInputChange} autoFocus style={{ border: 'none', outline: 'none', width: '85%', cursor: 'pointer' }} type="search" placeholder="search the data" />
        </div>
      </center>
      <Container>
        <Row className="mt-5">
          {loading && <p>Loading...</p>}
          {filteredResults.map((v: cloud, i) => {
            return (
              <Col md={4} key={i}>
                <section style={{ border: '1px solid #616874', borderRadius: "4px", margin: '8px', padding: '8px' }} >
                  <div className="text-center">
                    <p className="fw-semibold">{v.name}</p>
                    <p>{v.username}</p>
                  </div>
                </section>
              </Col>
            )
          })}
        </Row>
      </Container>
    </main>
  )
}

export { SpotComp, SpotAPI }











