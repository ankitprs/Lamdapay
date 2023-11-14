const axios = require('axios');


const ICICI_URL = "https://apibankingonesandbox.icicibank.com/api/v1/upi2/GetTransactionHistory"

class ICICI_Provider {
  constructor(url, interval) {
    this.pollingId = null;
  }

  async getTransactionList() {
    body_data = {
      "MobileNumber": "90404XXXXX",
      "deviceId": "84521654864135",
      "sequenceNumber": "ef1e92b4a01d4618a0eca5fdecc37ff23f3",
      "channelCode": "IMobile",
      "profileId": "561",
      "startTime": "01052019",
      "enDateime": "10052019",
      "limit": "10",
      "offset": "0"
    }
    try {
      return await axios.post(ICICI_URL, body_data)
    } catch (error) {
      return null
    }
  }
}

module.exports = ICICI_Provider;
