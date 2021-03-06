import React, { useState } from "react";
import styles from "./Exhanger.module.css";
import Form from "react-bootstrap/Form";
import { getAction } from "../../actions/actions";
const currencies = ["EUR", "GBP", "JPY", "USD", "NOK", "DKK"];
function Exchanger() {
  const reg = /^-?\d+\.?\d*$/;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [currency, setCurrency] = useState(currencies[0]);
  const changeValue = async (value) => {
    if (value == "") {
      setOutput("");
      setInput(value);
    } else {
      setInput(value);
      const data = await getAction(
        `convert?from=${currency}&to=TRY&amount=${value}`
      );
      setOutput(data.result);
    }
  };

  const changeCurrency = async (value) => {
    setCurrency(value);
    if (input == "") {
      return; // hali hazırda bir input değeri yoksa gereksiz istek atılmasını engellemek için.
    } else {
      const data = await getAction(
        `convert?from=${value}&to=TRY&amount=${input}`
      );
      setOutput(data.result);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Döviz Çevir</h3>
      <div className={styles.formContainer}>
        <Form.Control
          value={input}
          onChange={(e) => {
            if (reg.test(e.target.value)) {
              changeValue(e.target.value);
            } else {
              if (e.target.value === "") {
                changeValue(e.target.value);
              }
            }
          }}
          style={{ color: "#2b3b48" }}
          className={styles.value}
        />
        <Form.Select
          className={styles.currencies}
          onChange={(e) => changeCurrency(e.target.value)}
        >
          {currencies.map((item) => (
            <option className={styles.currencyOption} key={item}>
              {item}
            </option>
          ))}
        </Form.Select>
      </div>
      <div>
        <svg
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <g fill="none" fillRule="evenodd">
            <g fill="#FFF" fillRule="nonzero">
              <g>
                <g>
                  <g>
                    <path
                      d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm0-2C11.85 46 2 36.15 2 24S11.85 2 24 2s22 9.85 22 22-9.85 22-22 22z"
                      transform="translate(-1125 -250) translate(1021 103) translate(20 80) translate(84 67)"
                    />
                    <g>
                      <path
                        d="M23.031 8.157c.513 0 .936.387.994.884l.006.116v11.925l2.293-2.292c.36-.36.928-.388 1.32-.083l.095.083c.36.36.388.928.083 1.32l-.083.095-4 4c-.36.36-.928.388-1.32.083l-.095-.083-4-4c-.39-.391-.39-1.024 0-1.415.36-.36.928-.388 1.32-.083l.095.083 2.292 2.292V9.157c0-.512.386-.935.884-.993l.116-.007zM8.387 8.21c.392-.305.96-.278 1.32.083l4 4 .083.094c.305.392.278.96-.083 1.32l-.094.083c-.392.305-.96.278-1.32-.083L10 11.415V23.34l-.007.117c-.057.497-.48.883-.993.883l-.117-.007c-.497-.057-.883-.48-.883-.993V11.415l-2.293 2.292-.094.083c-.392.305-.96.278-1.32-.083-.39-.39-.39-1.024 0-1.414l4-4z"
                        transform="translate(-1125 -250) translate(1021 103) translate(20 80) translate(84 67) translate(8 8)"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className={styles.formContainer}>
        <Form.Control
          value={output}
          readOnly
          className={styles.exchangeResult}
        />
        <Form.Control
          value={"TL"}
          readOnly
          className={styles.value}
          style={{
            width: 50,
            border: "none",
          }}
        />
      </div>
    </div>
  );
}

export default Exchanger;
