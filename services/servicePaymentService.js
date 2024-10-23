const servicePayments = [];

// Function to process a service payment
const processServicePayment = (phoneNumber, serviceId, amount) => {
  const paymentId = servicePayments.length + 1;
  const newPayment = { paymentId, phoneNumber, serviceId, amount, status: 'completed' };
  servicePayments.push(newPayment);
  return { message: 'Service payment successful', paymentId };
};

export { processServicePayment };
