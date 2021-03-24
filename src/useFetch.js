import {useState,useEffect} from 'react';

const useFetch=(url)=>{
    //interactive variavble
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortConst=new AbortController();
        fetch(url,{signal:abortConst.signal})
            .then(res => {
                if (!res.ok) {
                    throw Error('could not find resource!');
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                if(err.name==="AbortError"){
                    console.log("fetching Aborted!!");
                }else{
                    setIsLoading(false);
                    setError(err.message);
                }
               

            })
            return ()=>abortConst.abort();
    }, [url]);
    return {data,isLoading,error}

}

export default useFetch;