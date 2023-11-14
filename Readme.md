# Lamdapay Nodejs Documentation (Server side)

This JavaScript library provides a polling mechanism to retrieve payment status updates from ICICI Bank's API. It simplifies the process of integrating real-time payment status updates into your application without requiring webhooks.


## System Design
The library's system design consists of two main components:

- Bank Provider
The Bank Provider class encapsulates the interaction with ICICI Bank's API. It handles the process of making HTTP requests to the API, parsing the JSON responses, and extracting the relevant payment status information.

- Polling Request Class
The Polling Request class manages the continuous polling process. It sets up a timer to periodically refresh the payment status information and notifies the application when an update is received.


## Benefits
### This library offers several benefits:

Real-time payment status updates: Get notified of payment status changes as they happen without relying on webhooks.
Easy integration: Integrate the library into your application with minimal effort.
Robust and reliable: Built on top of ICICI Bank's API and thoroughly tested for reliability.