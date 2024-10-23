// Mock function to send a notification
const sendNotification = (phoneNumber, message) => {
    // Here you would integrate with an SMS/USSD gateway to send the message
    console.log(`Sending notification to ${phoneNumber}: ${message}`);
    return { message: 'Notification sent successfully' };
  };
  
  export { sendNotification };
  