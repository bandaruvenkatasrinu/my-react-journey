import { useEffect, useState } from 'react';

function useFetch() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const fetchData = async () => {
        try {
            
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const result = await response.json();
            setData(result);
            

        } catch (err) {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };
         useEffect(() => {
        fetchData();
    }, []);

    return { data, loading, error };
   
}

export default useFetch;