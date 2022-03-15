import Ballot from "./Components/Ballot/Ballot";
import React, { useEffect, useState } from "react";
import api from "./Api/Api";
import styles from "./styles.module.css";

function App() {
  const [ballotData, setBallotData] = useState([]);

  useEffect(() => {
    const getBallotData = async () => {
      const data = await api.getBallotData();
      setBallotData(data.items);
    };
    getBallotData();
  }, []);

  return (
    <div>
      <header>
        <h1 className={styles.title}>AWARDS 2021</h1>
      </header>
      <main>
        <Ballot items={ballotData} />
      </main>
    </div>
  );
}

export default App;
