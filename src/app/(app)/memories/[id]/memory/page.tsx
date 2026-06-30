import { notFound } from "next/navigation";

export default async function MemoryPage({
  params
}: {
  params: Promise<{ id?: string }>
}) {

  const { id } = await params;

  if (!id) notFound()

  return (
    <>
      memory
    </>
  )
}