import { LetterDetail } from "../../../features/letters/presentation/letter-detail";
import { AdminGate } from "../../../shared/components/AdminGate";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function LetterPage({ params }: Props) {
  const { id } = await params;
  const letterId = Number(id);

  return (
    <main className="container-page">
      <AdminGate>
        <LetterDetail letterId={letterId} />
      </AdminGate>
    </main>
  );
}
