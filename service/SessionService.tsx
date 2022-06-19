import { getCookie, setCookies } from "cookies-next";
import axios from "axios";
import cookiesDictionary from "../utils/constants/cookiesDictionary";
import {getOrCreateSession} from "../utils/apiClient";
import { SessionModel } from "../utils/model/SessionModel";
import errorCodeDictionary from "../utils/constants/errorCodeDictionary";

const SessionService = {
  initSession: () => {
    let currentSSID = getCookie(cookiesDictionary.SessionId);
    console.log("Curr cookie" + currentSSID);
    if (currentSSID === undefined) {
      getOrCreateSession(undefined).then((sessionModel : SessionModel) => {
        setCookies(cookiesDictionary.SessionId, sessionModel.sessionId);
      });
    } else {
      getOrCreateSession(currentSSID?.toString()).then((sessionModel : SessionModel) => {
        setCookies(cookiesDictionary.SessionId, sessionModel.sessionId);
      }).catch((error)=>{
        if(error === errorCodeDictionary.SessionNotFound){
          getOrCreateSession(undefined).then((sessionModel : SessionModel) => {
            setCookies(cookiesDictionary.SessionId, sessionModel.sessionId);
          });
        }else{
          throw error;
        }
      });
    }
  },
};

export default SessionService;
