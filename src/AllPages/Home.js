import About from "../AllComponande/About-Componand/About"
import Conect from "../AllComponande/Content-Comboands/Conect"
import FirstView from "../AllComponande/FirstView-Componads/FirstView"
import Foter from "../AllComponande/Foter"
import Margin from "../AllComponande/Margin"
import Servace from "../AllComponande/Servace-Componads/Servace"

function Home () {
    return (
        <>
            <Margin />
            <FirstView />
            <About />
            <Servace />
            <Conect />
            <Foter />
        </>
    )
}
export default Home