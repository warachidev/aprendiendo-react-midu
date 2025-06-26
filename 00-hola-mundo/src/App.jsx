import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

function App() {
    const midudev = {
        userName: "midudev"
    }


    return (
        <section className="App">
            <TwitterFollowCard  >
                Migel ANgel
            </TwitterFollowCard>
            <TwitterFollowCard  userName="pheralb"  >
                Pablo Fernandez
            </TwitterFollowCard>
            <TwitterFollowCard {...midudev}  >
                Migel  dunran
            </TwitterFollowCard>
            <TwitterFollowCard userName="vxnder"  >
                Migel ANgel dunran
            </TwitterFollowCard>
        </section>
    )
}

export default App;