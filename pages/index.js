import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "../styles/Home.module.css";
import Currency from "../components/Currency/Currency";
import Exchanger from "../components/Exchanger/Exchanger";
export default function Home({ data = [] }) {
  return (
    <Container style={{ paddingTop: 30 }}>
      <h3 className={styles.title}>Piyasalar</h3>
      <Row>
        {Object.entries(data.rates).map((item) => (
          <Col key={item[1]} xs={6} md={4}>
            <Currency value={item} />
          </Col>
        ))}
        <Col xs={6} md={4}>
          <Exchanger />
        </Col>
      </Row>
    </Container>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.exchangerate.host/latest?symbols=USD,EUR,NOK,DKK,JPY,GBP,?&base=TRY`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
