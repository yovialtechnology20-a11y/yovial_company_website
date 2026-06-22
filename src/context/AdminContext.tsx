import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { supabase } from '../lib/supabase';

type AdminContextType = {
  isAuthenticated: boolean;
  username: string | null;
  login: (user: string, pass: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
  changePassword: (oldPass: string, newPass: string) => Promise<{ ok: boolean; error?: string }>;
};

const AdminContext = createContext<AdminContextType | null>(null);

const SESSION_KEY = 'yovial_admin_session';

export function AdminProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState<string | null>(() => {
    try {
      const raw = sessionStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  const login = useCallback(async (user: string, pass: string) => {
    const { data, error } = await supabase.rpc('verify_admin_login', {
      p_username: user,
      p_password: pass,
    });
    if (error) return { ok: false, error: error.message };
    if (!data) return { ok: false, error: 'Invalid username or password' };
    setUsername(user);
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
    return { ok: true };
  }, []);

  const logout = useCallback(() => {
    setUsername(null);
    sessionStorage.removeItem(SESSION_KEY);
  }, []);

  const changePassword = useCallback(async (oldPass: string, newPass: string) => {
    const { data, error } = await supabase.rpc('change_admin_password', {
      p_old_password: oldPass,
      p_new_password: newPass,
    });
    if (error) return { ok: false, error: error.message };
    if (!data) return { ok: false, error: 'Current password is incorrect' };
    return { ok: true };
  }, []);

  return (
    <AdminContext.Provider value={{ isAuthenticated: !!username, username, login, logout, changePassword }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error('useAdmin must be used within AdminProvider');
  return ctx;
}
