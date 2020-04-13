import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:3333'
});


export default api;

/**
 *  iOS with Emulator:      localhost
 *  iOS with device:        your IP PC/Notebook
 *  Android with Emulator:  localhost (adb reverse)
 *  Android with Emulator:  10.0.2.2 (Adroid Studio)
 *  Android with Emulator:  10.0.3.2 (Genymotion)
 *  Android with device:    your IP PC/Notebook
 */
