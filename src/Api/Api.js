const api = {
  getBallotData() {
    return fetch("/api/getBallotData")
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        throw new Error(err);
      });
  },
};

export default api;
