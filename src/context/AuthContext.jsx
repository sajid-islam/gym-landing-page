'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = useCallback(async () => {
    if (token) {
      await fetch('https://apitest.thewarriors.team/api/logout', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  }, [token]);

  const fetchUserDetails = useCallback(
    async (authToken) => {
      try {
        const response = await fetch('https://apitest.thewarriors.team/api/user-detail', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          logout();
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        logout();
      } finally {
        setLoading(false);
      }
    },
    [logout]
  );

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchUserDetails(storedToken);
    } else {
      setLoading(false);
    }
  }, [fetchUserDetails]);

  const login = async (email, password, rememberMe) => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('remember_me', rememberMe ? 'true' : 'false');

    const response = await fetch('https://apitest.thewarriors.team/api/login', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      if (data.token) {
        setToken(data.token);
        localStorage.setItem('token', data.token);
        await fetchUserDetails(data.token);
        return { success: true };
      }
    }
    return { success: false, error: 'Login failed' };
  };

  const register = async (firstName, lastName, email, password, confirmPassword, terms) => {
    if (password !== confirmPassword) {
      return { success: false, error: 'Passwords do not match' };
    }

    const formData = new FormData();
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password_confirmation', confirmPassword);
    formData.append('terms', terms ? 'true' : 'false');

    const response = await fetch('https://apitest.thewarriors.team/api/register', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, otp: data.data.otp };
    }
    return { success: false, error: 'Registration failed' };
  };

  const verifyOtp = async (email, otp) => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('otp', otp);

    const response = await fetch('https://apitest.thewarriors.team/api/verify_otp', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      return { success: true };
    }
    return { success: false, error: 'OTP verification failed' };
  };

  const resendOtp = async (email) => {
    const formData = new FormData();
    formData.append('email', email);

    const response = await fetch('https://apitest.thewarriors.team/api/resend_otp', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, otp: data.data.otp };
    }
    return { success: false, error: 'Resend OTP failed' };
  };

  const forgotPassword = async (email) => {
    const formData = new FormData();
    formData.append('email', email);

    const response = await fetch('https://apitest.thewarriors.team/api/forgot-password', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, otp: data.data.otp };
    }
    return { success: false, error: 'Forgot password failed' };
  };

  const forgotVerifyOtp = async (email, otp) => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('otp', otp);

    const response = await fetch('https://apitest.thewarriors.team/api/forgot-verify-otp', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, token: data.data.token };
    }
    return { success: false, error: 'OTP verification failed' };
  };

  const resetPassword = async (password, confirmPassword, resetToken) => {
    if (password !== confirmPassword) {
      return { success: false, error: 'Passwords do not match' };
    }

    const formData = new FormData();
    formData.append('password', password);
    formData.append('password_confirmation', confirmPassword);
    formData.append('token', resetToken);

    const response = await fetch('https://apitest.thewarriors.team/api/reset-password', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      return { success: true };
    }
    return { success: false, error: 'Reset password failed' };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        verifyOtp,
        resendOtp,
        forgotPassword,
        forgotVerifyOtp,
        resetPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
