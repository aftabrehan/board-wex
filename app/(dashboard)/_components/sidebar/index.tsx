import { List } from './list'
import { NewButton } from './new-button'

export const Sidebar = () => (
  <aside className="hidden xs:flex fixed z-[1] left-0 bg-amber h-full w-[60px] p-3 flex-col gap-y-4 text-white">
    <List />
    <NewButton />
  </aside>
)
