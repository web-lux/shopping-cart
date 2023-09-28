import { useParams } from "react-router-dom";

export default function Details() {
    const { item } = useParams();

    return (
        <>
            <p>{ item }</p>
        </>
    )
}