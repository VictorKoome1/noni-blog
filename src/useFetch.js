import { useState, useEffect } from "react"

//fully reusable useFetch custom hook
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)


useEffect(() => {
fetch(url)
.then((res)=> {
   if(!res.ok) {
    throw Error('could not fetch data for the resource')
   }
    return res.json()
})
.then((data)=> {
    setData(data)
    setIsLoading(false)
    setError(null)
})
.catch((err) => {
    setIsLoading(false)
    setError(err.message)
})
// return console.log('clean up')
// use a url as a dependency so that when the url changes it can re run the function
}, [url]); 

return {data, loading, error}
}
 
export default useFetch;