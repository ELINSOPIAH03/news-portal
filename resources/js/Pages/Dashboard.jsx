import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard(props) {
    const [title, setTitle] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () =>{
        const data = {
            title,deskripsi,category
        }
        Inertia.post('/news',data)
    }
    console.log('propsis',props);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Berita Saya</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200 gap-2">
                        <input type="text" placeholder="Judul" className="input input-bordered w-full m-1 " onChange={(title)=>setTitle(title.target.value)}/>
                        <input type="text" placeholder="Deskripsi" className="input input-bordered w-full m-1 " onChange={(deskripsi)=>setDeskripsi(deskripsi.target.value)}/>
                        <input type="text" placeholder="Kategory" className="input input-bordered w-full m-1 " onChange={(category)=>setCategory(category.target.value)}/>
                        <button className="btn btn-active btn-primary m-1" onClick={() => handleSubmit()}>Submit</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
