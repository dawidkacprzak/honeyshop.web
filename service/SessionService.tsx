import { getCookie, setCookies } from "cookies-next";
import axios from "axios";
const SessionService = {
  initSession: () => {
    let currentSSID = getCookie("SSID");
    console.log("CURRENT SSID:" + currentSSID)
    if (currentSSID === undefined) {
      axios
        .post("https://pasiekaapidev.azurewebsites.net/GetOrCreateSession",{})
        .then((data)=>{
            var newSSID = data.data.session.sessionId
            setCookies("SSID",newSSID);
        });
    }
  },
};

export default SessionService;
