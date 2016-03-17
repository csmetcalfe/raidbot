module.exports = {
  selectRandomEngineer: function () {
    ENGINEERS = [
      "abaker",
      "cmetcalfe",
      "cnguyen",
      "jbecker",
      "johnny",
      "mthompson"
    ];
    return ENGINEERS[Math.floor(Math.random() * ENGINEERS.length)];
  }
}
