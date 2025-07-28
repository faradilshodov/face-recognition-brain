import { useState } from 'react';
import { ClarifaiApi, grpc } from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import ParticlesBg from 'particles-bg';

const app = new ClarifaiApi.App({
    apiKey: '59785acc68954d349b2c888eea184594'
});


const App = () => {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [box, setBox] = useState({});

    const calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height);
        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        };
    }

    const onInputChange = (event) => {
        setInput(event.target.value);
    }

    const onButtonSubmit = () => {
        setImageUrl(input);
        app.models.predict(ClarifaiApi.FACE_DETECT_MODEL, input)
            .then(response => {
                calculateFaceLocation(response);
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <div className='App'>
                <ParticlesBg
                    type="cobweb"
                    color="#D4AF37"
                    num={100}
                    bg={true}
                />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
                <FaceRecognition imageUrl={imageUrl} />
            </div>
        </>
    )
}

export default App
