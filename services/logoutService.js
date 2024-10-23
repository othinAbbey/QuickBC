const logoutUser = (token) => {
  // Invalidate the token (implementation depends on your token management strategy)
  // For simplicity, we'll assume the token is invalidated successfully
  return { message: 'Logout successful' };
};

export { logoutUser };
