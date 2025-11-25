import { IonApp } from "@ionic/react";
import { AppPages } from "./routes/AppPages";

export const App = () => {
    return (
        <IonApp>
            <AppPages />
        </IonApp>
    );
}
