import { IonCol, IonRow } from '@ionic/react';
import React from 'react';

const BmiResult: React.FC<{ bmi: number }> = ({ bmi }) => {
    return (
        <IonRow>
            <IonCol> {bmi > 0 && <h2>Your bmi is: {bmi}</h2>} </IonCol>
        </IonRow>
    );
};

export default BmiResult;
