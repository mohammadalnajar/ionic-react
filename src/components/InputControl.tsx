import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import React from 'react';

const InputControl: React.FC<{
    setMethod: (arg: 'metric' | 'imperial') => void;
    method: 'metric' | 'imperial';
}> = ({ method, setMethod }) => {
    const inputChangeHandler = (event: CustomEvent) => {
        setMethod(event.detail.value);
    };

    return (
        <IonSegment value={method} onIonChange={inputChangeHandler}>
            <IonSegmentButton value='metric'>
                <IonLabel>meter/kg</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='imperial'>
                <IonLabel>inches/pounds</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    );
};

export default InputControl;
