export default function Spider({title,description,image}){
    return(
        <>
             <div class="card" style={{width: "18rem;"}}>
            <img src={image} class="card-img-top" alt="image"></img>
            <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
            <a href="https://www.marvel.com/movies" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </>
    )
}