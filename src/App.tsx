import {
    IonApp,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonRow,
    IonSegment,
    IonSegmentButton,
    IonTitle,
    IonToolbar,
    setupIonicReact,
    useIonAlert
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import React, { useRef, useState } from 'react';
import BmiControllers from './components/BmiControllers';
import BmiResult from './components/BmiResult';
import InputControl from './components/InputControl';

setupIonicReact();

const App: React.FC = () => {
    const [bmi, setBmi] = useState<number | undefined>(undefined);
    const [method, setMethod] = useState<'metric' | 'imperial'>('metric');

    const [presentAlert] = useIonAlert();

    const weightInputRef = useRef<HTMLIonInputElement>(null);
    const heightInputRef = useRef<HTMLIonInputElement>(null);

    const calculateBmi = () => {
        const weight = weightInputRef.current?.value;
        const height = heightInputRef.current?.value;

        if (!weight || !height || height <= 0 || weight <= 0) {
            presentAlert({
                header: 'Alert',
                subHeader: 'Important message',
                message: 'Please fill in both fields with positive numbers!',
                buttons: ['OK']
            });

            resetInputs();
            return;
        }

        const bmiCal =
            method === 'metric'
                ? +(+weight / (+height * +height)).toFixed(2)
                : +((+weight * 703) / (+height * +height)).toFixed(2);
        setBmi(bmiCal);
    };

    const resetInputs = () => {
        weightInputRef.current!.value = '';
        heightInputRef.current!.value = '';

        setBmi(undefined);
    };

    const checkEnterKeyPress = (e: any) => {
        if (e.keyCode === 13) {
            calculateBmi();
        }
    };

    return (
        <IonApp>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>BMI Calculator</IonTitle>
                </IonToolbar>
                <InputControl setMethod={setMethod} method={method} />
            </IonHeader>
            <IonContent>
                <IonItem>
                    <IonLabel position='floating'>Your Height</IonLabel>
                    <IonInput
                        onKeyUp={checkEnterKeyPress}
                        type='number'
                        ref={heightInputRef}
                        id='height-input'
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position='floating'>Your Weight</IonLabel>
                    <IonInput
                        onKeyUp={checkEnterKeyPress}
                        type='number'
                        ref={weightInputRef}
                        id='weight-input'
                    ></IonInput>
                </IonItem>

                <IonGrid className='ion-margin ion-text-center'>
                    <BmiControllers onCalculate={calculateBmi} onReset={resetInputs} />
                    <BmiResult bmi={bmi} />
                </IonGrid>
            </IonContent>
        </IonApp>
    );
};

export default App;
