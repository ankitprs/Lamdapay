import PollingRequest from './PollingRequest'

const pollingRequest = PollingRequest('https://api.icicibank.com/payments/status/{paymentId}', 60000)


// started to polling
pollingRequest.startPolling();

pollingRequest.on('update', (data) => {
  if (data.status === 'SUCCESS') {
    console.log('Payment successful!');
  } else if (data.status === 'FAILED') {
    console.error('Payment failed!');
  }
});