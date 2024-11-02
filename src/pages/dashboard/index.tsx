import { useAuthStore } from '@/store/auth.store';

export default function Dashboard() {
  const user = useAuthStore((state) => state.user);
  
  if (!user) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <h1>Welcome, {user.email}</h1>
    </div>
  );
}