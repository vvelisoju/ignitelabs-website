import React, { useState, useEffect, createContext, useContext } from 'react';
const AuthContext = createContext(undefined);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // Fetch current user on mount
    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const res = await fetch('/api/auth/me', { credentials: 'include' });
                if (!res.ok) {
                    if (res.status === 401) {
                        setIsAuthenticated(false);
                        setUser(null);
                    }
                    else {
                        console.error('Failed to fetch user:', res.statusText);
                    }
                }
                else {
                    const userData = await res.json();
                    setUser(userData);
                    setIsAuthenticated(true);
                }
            }
            catch (error) {
                console.error('Error fetching user:', error);
                setIsAuthenticated(false);
                setUser(null);
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchCurrentUser();
    }, []);
    // Login function
    const login = async (data) => {
        setIsLoading(true);
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                credentials: 'include',
            });
            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message || 'Login failed');
            }
            const userData = await res.json();
            setUser(userData);
            setIsAuthenticated(true);
            return userData;
        }
        catch (error) {
            console.error('Login error:', error);
            throw error;
        }
        finally {
            setIsLoading(false);
        }
    };
    // Register function
    const register = async (data) => {
        setIsLoading(true);
        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                credentials: 'include',
            });
            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message || 'Registration failed');
            }
            const userData = await res.json();
            setUser(userData);
            setIsAuthenticated(true);
            return userData;
        }
        catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
        finally {
            setIsLoading(false);
        }
    };
    // Logout function
    const logout = async () => {
        try {
            const res = await fetch('/api/auth/logout', {
                method: 'POST',
                credentials: 'include',
            });
            if (!res.ok) {
                console.error('Logout failed:', res.statusText);
            }
            setUser(null);
            setIsAuthenticated(false);
        }
        catch (error) {
            console.error('Logout error:', error);
            throw error;
        }
    };
    const authValue = {
        user,
        isLoading,
        isAuthenticated,
        login,
        register,
        logout
    };
    return React.createElement(AuthContext.Provider, { value: authValue }, children);
};
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
//# sourceMappingURL=simplified-auth.js.map