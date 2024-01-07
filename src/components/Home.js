import photo from "../programmer.jpg";
 
const Home = () => {

    return(
        <div className="home">
            <div className="text">
                <h3>Jako programista, moja praca to nie tylko kodowanie, ale również wyrażanie kreatywności poprzez tworzenie nowych rozwiązań i rozwiązywanie problemów. Fascynuje mnie dynamiczny rozwój branży, która stale wymaga nauki nowych technologii. Elastyczność zawodowa, umożliwiająca pracę zdalną i dostosowanie godzin, pozwala mi utrzymać równowagę między pracą a życiem prywatnym. </h3>
            </div>
            <img src={photo} class="img-fluid"></img>
        </div>
    /*const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
    return (
        <div className="home">
            { error && <div> { error }</div>}
            { isPending && <div>Loading..</div>}
            { blogs && <BlogList blogs={ blogs } title="All blogs!"/>}
        </div>
      );*/
    )
}
 
export default Home;