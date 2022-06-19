import axios from "axios";
import apiErrorCode from "./constants/apiErrorCodeDictionary";
import errorCodeDictionary from "./constants/errorCodeDictionary";
import { SessionModel } from "./model/SessionModel";
const apiUrl =
  process.env.API_DEPLOYMENT_URL == undefined
    ? process.env.API_URL
    : process.env.API_DEPLOYMENT_URL;

export const getOrCreateSession = (sessionId: string | undefined) =>
  new Promise<SessionModel>((resolve, reject) => {
    axios
      .post<GetOrCreateSessionReponse>(
        `${apiUrl}/GetOrCreateSession`,
        sessionId === undefined ? {} : sessionId
      )
      .then((res) => {
        if (res.data.success) {
          resolve(res.data.value);
        } else {
          if (res.data.errorCode === apiErrorCode.SessionNotFound) {
            reject(errorCodeDictionary.SessionNotFound);
          } else {
            throw "Unexpected error: " + res.data.errors;
          }
        }
      })
      .catch((err) => {
        throw err;
      });
  });

  function generatePostRequest<T = any>(bodyArg : any) : Promise<T>
  {
    return new Promise<T>((resolve,reject)=>{
      axios.post<T>(`${apiUrl}/GetOrCreateSession`, bodyArg === undefined ? {} : bodyArg,{
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((v)=> resolve(v.data)).catch((err)=>{
        throw err;
      });
    })
  }

interface ApiResponseBase {
  timeUtc: Date;
  success: boolean;
  errors: string[];
  errorCode: number;
}

interface GetOrCreateSessionReponse extends ApiResponseBase {
  value: SessionModel;
}
