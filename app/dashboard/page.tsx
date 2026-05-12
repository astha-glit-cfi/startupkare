'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useAuthStore } from '@/store/useStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { BarChart3, Target, TrendingUp, Users, Award, Bell } from 'lucide-react';

export default function Dashboard() {
  const { isAuthenticated, user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <main>
      <Navbar />
      <section className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-2">Welcome, {user?.name}! 👋</h1>
            <p className="text-gray-400">Here's your startup growth dashboard</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Target,
                label: 'Profile Completion',
                value: '65%',
                color: 'text-blue-500',
              },
              {
                icon: TrendingUp,
                label: 'Startup Score',
                value: '78',
                color: 'text-green-500',
              },
              {
                icon: Award,
                label: 'Matched Schemes',
                value: '12',
                color: 'text-orange-500',
              },
              {
                icon: Users,
                label: 'Investor Connections',
                value: '5',
                color: 'text-purple-500',
              },
            ].map((metric, idx) => (
              <div key={idx} className="p-6 bg-slate-800 border border-slate-700 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{metric.label}</p>
                    <p className="text-3xl font-bold text-white">{metric.value}</p>
                  </div>
                  <metric.icon className={`${metric.color} opacity-50`} size={32} />
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile & Tasks */}
            <div className="lg:col-span-2 space-y-8">
              {/* Profile Setup */}
              <div className="p-8 bg-slate-800 border border-slate-700 rounded-xl">
                <h2 className="text-2xl font-bold text-white mb-6">Complete Your Profile</h2>
                <div className="space-y-4">
                  {[
                    { label: 'Startup Details', completed: true },
                    { label: 'Team Information', completed: true },
                    { label: 'Funding Goals', completed: false },
                    { label: 'Market Analysis', completed: false },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                      <span className="text-gray-300">{item.label}</span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.completed
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-gray-500/20 text-gray-400'
                        }`}
                      >
                        {item.completed ? '✓ Done' : 'Pending'}
                      </span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition">
                  Continue Setup
                </button>
              </div>

              {/* Recommended Actions */}
              <div className="p-8 bg-slate-800 border border-slate-700 rounded-xl">
                <h2 className="text-2xl font-bold text-white mb-6">Recommended Actions</h2>
                <div className="space-y-4">
                  {[
                    '📝 Apply for PM-YUVA Scheme (Deadline: May 15)',
                    '🚀 Generate Pitch Deck with AI',
                    '👥 Connect with 3 Mentor',
                    '📊 Set up GST & Compliance',
                  ].map((action, idx) => (
                    <div key={idx} className="p-4 bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/30 rounded-lg flex items-center justify-between">
                      <span className="text-gray-300">{action}</span>
                      <button className="text-orange-500 hover:text-orange-600 transition">→</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Notifications & Quick Links */}
            <div className="space-y-8">
              {/* Notifications */}
              <div className="p-6 bg-slate-800 border border-slate-700 rounded-xl">
                <div className="flex items-center space-x-2 mb-6">
                  <Bell className="text-orange-500" size={24} />
                  <h3 className="text-xl font-bold text-white">Notifications</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { message: 'New scheme available', time: '2h ago' },
                    { message: 'Investor viewed profile', time: '5h ago' },
                    { message: 'Mentor available tomorrow', time: '1d ago' },
                  ].map((notif, idx) => (
                    <div key={idx} className="p-3 bg-slate-700/30 rounded-lg border-l-2 border-orange-500">
                      <p className="text-sm text-gray-300">{notif.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="p-6 bg-slate-800 border border-slate-700 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">Quick Access</h3>
                <div className="space-y-2">
                  {['AI Tools', 'Find Schemes', 'Connect Investors', 'Compliance Hub'].map((link, idx) => (
                    <button
                      key={idx}
                      className="w-full px-4 py-2 text-left text-gray-300 hover:text-orange-500 hover:bg-slate-700/50 rounded-lg transition"
                    >
                      {link} →
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
