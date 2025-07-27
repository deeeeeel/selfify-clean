import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kqgptresfmvgczbfmxjp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxZ3B0cmVzZm12Z2N6YmZteGpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MDE2OTksImV4cCI6MjA2OTE3NzY5OX0.EvIpU6kMNkosxgobKnhCmLJ2vUpD36P3Z8qSe-Isn8g';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
