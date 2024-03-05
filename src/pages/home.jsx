import { memo } from "react";
import useFetch from "../custom_hooks/useFetch";

function Home() {
    const { isLoading, apiData, apiError } = useFetch("https://dummyjson.com/products");
    console.log(apiData);
    if (isLoading) return (<main>Loading...</main>);
    return (
        <main>
            App component
        </main>
    );
}

export default memo(Home);