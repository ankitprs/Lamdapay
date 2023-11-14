const axios = require('axios');
const ICICI_Provider = require('./icici_provider');

class PollingRequest {

  constructor(url, interval) {
    this.icici_provider = ICICI_Provider();
    this.interval = interval;
    this.pollingId = null;
  }

  startPolling() {
    this.pollingId = setInterval(() => {
      this.fetchData();
    }, this.interval);
  }

  stopPolling() {
    if (this.pollingId) {
      clearInterval(this.pollingId);
      this.pollingId = null;
    }
  }

  fetchData() {
    let transactions = icici_provider.getTransactionList()
    // Save this transaction to SQL DB for payments
    transactions
  }


}

module.exports = PollingRequest;
