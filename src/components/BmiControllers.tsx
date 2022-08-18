import { IonButton, IonCol, IonIcon, IonRow } from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';
import React from 'react';

const BmiControllers: React.FC<{ onCalculate: () => void; onReset: () => void }> = ({
    onCalculate,
    onReset
}) => {
    return (
        <IonRow>
            <IonCol>
                <IonButton onClick={onCalculate}>
                    Calculate
                    <IonIcon slot='end' icon={calculatorOutline} />
                </IonButton>
            </IonCol>
            <IonCol>
                <IonButton onClick={onReset} color='danger' fill='outline' id='reset-btn'>
                    Reset
                    <IonIcon slot='end' icon={refreshOutline} />
                </IonButton>
            </IonCol>
        </IonRow>
    );
};

export default BmiControllers;
