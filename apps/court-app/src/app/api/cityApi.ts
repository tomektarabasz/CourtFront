import axios from "axios"

export type City = {
  _id:string,
  name: string,
  key: string,
  wojewodztwo: string,
  powiat: string,
  gmina: string,
}

export const getCities = (queryCity,callback) => {
    console.log(queryCity)
    axios.get("http://0.0.0.0:80/all",{
          }).then(
            (response)=>{
              callback(response.data)
            }
          )
}
