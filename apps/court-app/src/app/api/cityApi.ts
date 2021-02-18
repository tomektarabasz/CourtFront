import axios from "axios"

export const getCities = () => {
    axios.get("http://0.0.0.0:80/all",{
          }).then(
            (response)=>{
              console.log({response})
            }
          )
}
