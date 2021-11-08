import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "../styles/Home.module.css";
import Currency from "../components/Currency/Currency";
import Exchanger from "../components/Exchanger/Exchanger";
export default function Home({ data = [] }) {
  return (
    <Container
      style={{
        paddingTop: 30,
        paddingBottom: 30,
      }}
    >
      <h3 className={styles.title}>Piyasalar</h3>
      <Row>
        <Col md={8}>
          <Row>
            {Object.entries(data.rates).map((item, index) => (
              <Col key={index} xs={12} md={6}>
                <Currency index={index} value={item} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={3}>
          <Exchanger />
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Row>
            <Col md={6}>
              <button className={styles.detailBtn} size={"lg"}>
                Detaylı Bilgi
              </button>
            </Col>
            <Col md={6}>
              <button className={styles.allMarketsBtn} size={"lg"}>
                Tüm Piyasalar
                <div className={styles.arrow}></div>
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.exchangerate.host/latest?symbols=USD,EUR,NOK,DKK,JPY,GBP&base=TRY`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
