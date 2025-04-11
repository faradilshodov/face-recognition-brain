import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import './App.css'
import ParticlesBg from 'particles-bg'

function App() {
    return (
        <>
            <div className='App'>
                <ParticlesBg 
                    type="cobweb"
                    color="#ffffff"
                    num={200}
                    bg={true} 
                />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm />
                {/* <FaceRecognition /> */}
            </div>
        </>
    )
}

export default App
