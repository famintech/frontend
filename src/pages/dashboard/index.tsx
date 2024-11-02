import { useAuthStore } from '@/store/auth.store';

export default function Dashboard() {
  const user = useAuthStore((state) => state.user);
  
  return (
    <div>
      <h1>Welcome, {user?.firstName || user?.email}</h1>
    </div>
  );
}