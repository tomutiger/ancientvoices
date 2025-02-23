
create table public.user_profiles (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users not null,
  age integer,
  gender text,
  native_language text,
  accent text,
  speaking_impairments text,
  recording_environment text,
  created_at timestamp with time zone default timezone("utc"::text, now()) not null,
  updated_at timestamp with time zone default timezone("utc"::text, now()) not null
);

create unique index user_profiles_user_id_key on public.user_profiles(user_id);

alter table public.user_profiles enable row level security;

create policy "Users can view their own profile"
  on public.user_profiles for select
  using (auth.uid() = user_id);

create policy "Users can update their own profile"
  on public.user_profiles for update
  using (auth.uid() = user_id);

create policy "Users can insert their own profile"
  on public.user_profiles for insert
  with check (auth.uid() = user_id);

