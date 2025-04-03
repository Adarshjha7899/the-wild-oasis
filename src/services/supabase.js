import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://ugjrkbyaoinringnspqg.supabase.co';

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnanJrYnlhb2lucmluZ25zcHFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4OTE5MzQsImV4cCI6MjA1NzQ2NzkzNH0.pi6QUKIyjGdDZi8L5P_wUgpADl2NZw1b5KJsZVgrxRw";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;