export const isAuthenticated = () => {
    const user = localStorage.getItem('user');
    return !!user;
  };
  
  export const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };
  
  export const logout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };