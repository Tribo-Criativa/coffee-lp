import { Annotation } from "../../components/Annotation"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"

function App() {
  return (
    <main className="h-screen w-full max-w-7xl mx-auto flex flex-col px-4">
      <Header />

      <div className="flex flex-col gap-6 items-center md:items-start w-1/3">
        <span className="text-aqua font-medium text-sm flex gap-2 items-center">☕ PESQUISA QUANTITATIVA </span>

        <h1 className="text-[#001819] dark:text-white text-4xl lg:text-6xl font-black font-sans leading-tight lg:leading-snug text-center lg:text-left">
            <span className="underline decoration-8 decoration-orange transition-all duration-700 ease-in-out">Café</span> 
            {' '}
            nosso de cada dia
        </h1>

        <span className="text-[#001819] dark:text-[#D0D0D0] font-normal text-base text-center lg:text-left leading-relaxed">
          Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
        </span>
      </div>

      <div className="flex mt-6">
        <Button label="Responder agora" title="Responder formulário agora!" to="https://forms.gle/PMxoUoS9dBVuT4ULA" />
        <Annotation />
      </div>

    </main>
  )
}

export default App
