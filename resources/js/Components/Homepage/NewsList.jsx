import ReactReadMoreReadLess from "react-read-more-read-less";


const isNews = (news) => {
    return news.map((data, i) => {
        return <div key={i} className="card w-full h-90 lg:w-96 bg-base-100 shadow-xl">
            <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    <ReactReadMoreReadLess
                        charLimit={20}
                        readMoreText={""}
                        readLessText={"..."}
                    >
                        {data.title}
                    </ReactReadMoreReadLess>
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p><ReactReadMoreReadLess
                    charLimit={100}
                    readMoreText={"Read more ▼"}
                    readLessText={"Read less ▲"}
                >
                    {data.description}
                </ReactReadMoreReadLess></p>
                <div className="card-actions justify-end">
                    <div className="badge badge-inline"><ReactReadMoreReadLess
                        charLimit={10}
                        readMoreText={""}
                        readLessText={"..."}
                    >
                        {data.category}
                    </ReactReadMoreReadLess></div>
                    <div className="badge badge-outline">{data.author}</div>
                </div>
            </div>
        </div>
    })
}


const noNews = () => {
    return(
        <div>Saat Ini tidak ada berita tersedia</div>
    )
}
const NewsList = ({ news }) => {
    return !news ? noNews() : isNews(news)
}


export default NewsList