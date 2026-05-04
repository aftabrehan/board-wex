import { Room } from '@/components/room'
import { Canvas } from './_components/canvas'
import { Loading } from './_components/loading'

interface BoardIdPageProps {
  params: Promise<{ boardId: string }>
}

const BoardIdPage = async ({ params }: BoardIdPageProps) => {
  const { boardId } = await params

  return (
    <Room roomId={boardId} fallback={<Loading />}>
      <Canvas boardId={boardId} />
    </Room>
  )
}

export default BoardIdPage
