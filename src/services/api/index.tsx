import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://brskxfiiedlamzytbugh.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyc2t4ZmlpZWRsYW16eXRidWdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxMjIxNTQsImV4cCI6MjAxMzY5ODE1NH0.Sl7rJA1QWuiRPPk9d0skZdRgCXt517Xfv0ReC3eueR0';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
