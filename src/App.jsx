import { useContext } from "react"
import { Card } from "./components/Card.jsx" 
import { TranslateCard } from "./components/TranslateCard.jsx"
import { Languajes } from "./contexts/Languajes.jsx"

function App() {
  const { wantTranslate } = useContext(Languajes)

  return (
    <div className="h-screen w-screen bg-[url('/hero_img.jpg')] bg-cover bg-no-repeat flex justify-center items-center gap-14">
      <Card/>
      <TranslateCard 
        wantTranslate={wantTranslate}
      />
    </div>
  )
}

export default App
