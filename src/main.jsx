import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";

import { Suspense } from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import "./index.css";

studio.initialize()
studio.extend(extension)


ReactDOM.createRoot(document.getElementById('root')).render(
    <Suspense fallback={null}>
        <App />
    </Suspense>
);