import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false },
});

export type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  live_url: string | null;
  sort_order: number;
};
