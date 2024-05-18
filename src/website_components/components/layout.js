
import Header from "./header/header"
import Sidebar from "./sidebar/sidebar"
export default function Layout({ children }) {
  return (
    <div className="text-[#B6B6B8]">
      <Sidebar />
      <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-[#fafafa] min-h-screen transition-all main">
        <Header/>
        {children}
      </main>
    </div>
  )
}
