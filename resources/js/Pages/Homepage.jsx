import { Link, Head } from '@inertiajs/react';

export default function Homepage (props){
    console.log(props);
    return (
        <div className='flex justify-center items-center min-h-screen bg-neutral-800 text-white '>
            <Head title={props.title}/>
            <div>
                {props.news ? props.news.map((data,i)=> {
                    <p>{props.deskripsi}</p>
                    console.log(props.deskripsi);
                    return(
                        <div key={i} className='p-4 m-2 bg-white text-black'>
                            <p className='text-3xl'>{data.title}</p>
                            <p className='text-small'>{data.deskripsi}</p>
                            <i>{data.category}</i><br/>
                            <i>{data.author}</i>
                        </div>
                    )
                }) : <p>Data Berita Belum Tersedia</p>}
            </div>
        </div>
    )
}