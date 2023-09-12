import { useAppSelector } from '../store'
import { useCurrentLesson } from '../store/slices/players'

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()
  const isLoading = useAppSelector((state) => state.player.isLoading)

  if (isLoading) {
    return (
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">Carregando...</h1>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">{currentModule?.title}</span>
    </div>
  )
}
