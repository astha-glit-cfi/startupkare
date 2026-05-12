import { create } from 'zustand';
import { User, StartupProfile, Notification } from '@/types';

interface AuthStore {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setAuthenticated: (authenticated: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: false,
  isAuthenticated: false,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ isLoading: loading }),
  setAuthenticated: (authenticated) => set({ isAuthenticated: authenticated }),
}));

interface StartupStore {
  profile: StartupProfile | null;
  loading: boolean;
  setProfile: (profile: StartupProfile | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useStartupStore = create<StartupStore>((set) => ({
  profile: null,
  loading: false,
  setProfile: (profile) => set({ profile }),
  setLoading: (loading) => set({ loading }),
}));

interface NotificationStore {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  removeNotification: (id: string) => void;
  markAsRead: (id: string) => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  addNotification: (notification) => 
    set((state) => ({ notifications: [notification, ...state.notifications] })),
  removeNotification: (id) => 
    set((state) => ({ notifications: state.notifications.filter((n) => n.id !== id) })),
  markAsRead: (id) => 
    set((state) => ({
      notifications: state.notifications.map((n) => 
        n.id === id ? { ...n, read: true } : n
      ),
    })),
}));
