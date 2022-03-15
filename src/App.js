import Ballot from "./Components/Ballot/Ballot";
import React, { useEffect, useState } from "react";
import api from "./Api/Api";
import styles from "./styles.module.css";

function App() {
  const [ballotData, setBallotData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBallotData = async () => {
      try {
        const data = await api.getBallotData();
        setBallotData(data.items);
      } catch (err) {
        setError("Could not fetch ballot data");
      }
    };

    getBallotData();
  }, []);

  return (
    <div>
      <header>
        <h1 className={styles.title}>AWARDS 2021</h1>
      </header>
      <main>
        {error && <p className={styles.error}>{error}</p>}
        <Ballot items={ballotData} />
      </main>
    </div>
  );
}

export default App;
