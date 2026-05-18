import { ReadingRoom } from "../../features/letters/presentation/reading-room";
import { AdminGate } from "../../shared/components/AdminGate";

export default function ReadPage() {
  return (
    <main className="container-page">
      <AdminGate>
        <ReadingRoom />
      </AdminGate>
    </main>
  );
}
