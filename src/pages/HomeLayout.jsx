import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <div>
        <nav>
            <span>navbar</span>
        </nav>
        <main>
            <Outlet />
        </main>
    </div>
  )
}
export default HomeLayout