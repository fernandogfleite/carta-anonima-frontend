import { AdminDashboard } from "../../features/admin/presentation/admin-dashboard";
import { AdminGate } from "../../shared/components/AdminGate";

export default function AdminPage() {
  return (
    <main className="container-page">
      <AdminGate>
        <AdminDashboard />
      </AdminGate>
    </main>
  );
}
