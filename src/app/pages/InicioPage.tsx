import { IonButton, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { useState } from "react";

export const InicioPage = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>dotZion Template</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonRow className="ion-text-center" style={{ marginBottom: '26px'}}>
                    <IonTitle>Clique para decrementar ou incrmentar</IonTitle>
                </IonRow>
                <IonRow className="ion-justify-content-center ion-align-items-center" style={{ gap: '26px' }} >
                    <IonButton onClick={decrement}>-</IonButton>
                    <IonText>{count}</IonText>
                    <IonButton onClick={increment}>+</IonButton>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}
