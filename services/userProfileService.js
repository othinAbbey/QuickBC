const users = [
    { phoneNumber: '1234567890', pin: '1234', name: 'John Doe', email: 'john@example.com' },
    { phoneNumber: '0987654321', pin: '5678', name: 'Jane Smith', email: 'jane@example.com' }
  ];
  
  // Function to get user profile
  const getUserProfile = (phoneNumber) => {
    const user = users.find(u => u.phoneNumber === phoneNumber);
    if (user) {
      return { phoneNumber: user.phoneNumber, name: user.name, email: user.email };
    } else {
      throw new Error('User not found');
    }
  };
  
  // Function to update user profile
  const updateUserProfile = (phoneNumber, name, email) => {
    const user = users.find(u => u.phoneNumber === phoneNumber);
    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      return { message: 'Profile updated successfully', user };
    } else {
      throw new Error('User not found');
    }
  };
  
  export { getUserProfile, updateUserProfile };
  