import CardList from '@/Components/Homepage/CardList';
import Navbar from '@/Components/Navbar';
import { Link, Head } from '@inertiajs/react';

export default function Homepage (props){
    console.log("props",props);
    return (
        <div className='min-h-screen bg-slate-50'>
            <Head title={props.title}/>
            <Navbar/>
            <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4'>
                <CardList news={props.news.data}/>
            </div>
        </div>
    )
}