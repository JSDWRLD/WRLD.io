import { Suspense } from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import "./index.css";


ReactDOM.createRoot(document.getElementById('root')).render(
    <Suspense fallback={null}>
        <App />
    </Suspense>
);