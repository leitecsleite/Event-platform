import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Video } from "../components/Video/Video";

export function Event(){
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
          <main className="flex flex-1">
            <Video/>
            <Sidebar/>
          </main>
        </div>
    )
}