const isNews = (news) => {
    return news.map((data, i) => (
        <div key={i} className="card w-full lg:w-96 bg-base-content-100 shadow-xl m-6">
            <figure><img src="https://wallpaperaccess.com/full/4958480.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {data.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{data.deskripsi}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-inline">{data.category}</div>
                    <div className="badge badge-outline">{data.author}</div>
                </div>
            </div>
        </div>
    ));
}
const noNews = () => {
    return(
        <div className="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Tidak ada berita saat ini.</span>
        </div>
    )
}

const CardList = ({news}) => {
    return !news ? noNews() : isNews(news)
}
export default CardList