# QuickSite Kenya - Client Portal System (React + Supabase)

As requested, here is the architecture, database schema, and React component code for a Vite + React + Supabase implementation of the Client Portal. 

*Note: Since your live application is currently using HTML/JS and Firebase, I have also built a native Firebase version of this portal in `client-portal.html` so you can use it immediately without rewriting your entire site!*

## 1. Database Schema (Supabase SQL)

Run this in your Supabase SQL Editor to create the relational structure:

```sql
-- Create Users Table (extends Supabase Auth)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Packages Table
CREATE TABLE public.packages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL, -- 'Starter Presence', 'Business Growth', 'Pro Conversion'
  features JSONB NOT NULL, -- e.g., ["1-page site", "WhatsApp Integration"]
  website_limit INTEGER DEFAULT 1,
  price_setup DECIMAL(10,2),
  price_monthly DECIMAL(10,2)
);

-- Create Subscriptions Table (Links User to Package)
CREATE TABLE public.subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) NOT NULL,
  package_id UUID REFERENCES public.packages(id) NOT NULL,
  status TEXT CHECK (status IN ('active', 'past_due', 'canceled')) DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Websites Table (The actual delivered product)
CREATE TABLE public.websites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) NOT NULL,
  subscription_id UUID REFERENCES public.subscriptions(id) NOT NULL,
  preview_url TEXT UNIQUE,
  status TEXT CHECK (status IN ('development', 'preview', 'published')) DEFAULT 'development',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.websites ENABLE ROW LEVEL SECURITY;

-- RLS Policies (Clients can only see their own data)
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can view own subscriptions" ON public.subscriptions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can view own websites" ON public.websites FOR SELECT USING (auth.uid() = user_id);
```

## 2. Supabase Queries (Relationship Logic)

When fetching the dashboard data, you can use Supabase's relational querying to get everything in one call.

```javascript
// Fetch user's subscription, package details, and associated website
const { data, error } = await supabase
  .from('subscriptions')
  .select(`
    id,
    status,
    packages (
      name,
      features,
      website_limit
    ),
    websites (
      preview_url,
      status
    )
  `)
  .eq('user_id', currentUser.id)
  .single();
```

## 3. React Dashboard Component (`ClientDashboard.jsx`)

Here is the clean SaaS dashboard built with React and Tailwind CSS.

```jsx
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { ExternalLink, Copy, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export default function ClientDashboard({ user }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const { data: subData, error } = await supabase
          .from('subscriptions')
          .select(`
            status,
            packages (name, features),
            websites (preview_url, status)
          `)
          .eq('user_id', user.id)
          .single();

        if (error) throw error;
        setData(subData);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
      } finally {
        setLoading(false);
      }
    }
    
    if (user) fetchDashboardData();
  }, [user]);

  const handleCopyLink = (url) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) return <div className="flex justify-center p-10"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>;
  if (!data) return <div className="p-10 text-center text-gray-500">No active subscription found.</div>;

  const website = data.websites?.[0]; // Assuming 1 site for now
  const pkg = data.packages;

  const StatusBadge = ({ status }) => {
    const styles = {
      published: "bg-green-100 text-green-800",
      preview: "bg-blue-100 text-blue-800",
      development: "bg-yellow-100 text-yellow-800"
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${styles[status] || 'bg-gray-100 text-gray-800'}`}>
        {status || 'Pending'}
      </span>
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.user_metadata?.full_name || 'Client'}</h1>
        <p className="text-gray-500 mt-2">Manage your QuickSite assets and subscription.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Package Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-gray-800">Subscription</h2>
            <StatusBadge status={data.status === 'active' ? 'published' : 'development'} />
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-100">
            <h3 className="font-semibold text-primary">{pkg.name}</h3>
            <p className="text-sm text-gray-500 mt-1">Your current tier</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Included Features:</h4>
            <ul className="space-y-2">
              {pkg.features?.map((feature, i) => (
                <li key={i} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Website Access Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Your Web Asset</h2>
          
          {website ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <span className="text-gray-600">Status</span>
                <StatusBadge status={website.status} />
              </div>

              <div>
                <span className="text-sm font-medium text-gray-600 block mb-2">Live Preview URL</span>
                <div className="flex items-center gap-2">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 flex-1 font-mono text-sm text-gray-800 overflow-x-auto truncate">
                    {website.preview_url || 'Pending generation...'}
                  </div>
                  <button 
                    onClick={() => handleCopyLink(`https://${website.preview_url}`)}
                    disabled={!website.preview_url}
                    className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-600 disabled:opacity-50"
                  >
                    {copied ? <CheckCircle className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
                  </button>
                  <a 
                    href={`https://${website.preview_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors disabled:opacity-50"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <Clock className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="text-gray-900 font-medium">Asset in Queue</h3>
              <p className="text-gray-500 text-sm mt-1">Our team is setting up your digital environment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
```

## 4. Admin Management (Next Steps for Setup)
For the Admin panel in a React/Supabase app, you would create an `AdminDashboard.jsx` that queries all users and allows updates to the `subscriptions` and `websites` tables using `supabase.from('websites').update({ preview_url: url }).eq('user_id', id)`.
