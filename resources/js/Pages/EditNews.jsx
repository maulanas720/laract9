import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import { Inertia } from '@inertiajs/inertia';

export default function EditNews(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');


    const handleSubmit = () => {
        const data = {
            id: props.myNews.id, title, description, category
        }
        Inertia.post('/news/update', data)
        setTitle('')
        setDescription('')
        setCategory('')
    }
    return (
        <div data-theme="bumblebee" className='min-h-screen'>
            <Head title={props.title} />
            {/* Section Navbar */}
            <Navbar user={props.auth.user} />
            <div className="card m-2 w-full h-90 lg:w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Edit Berita</h2>
                    <input type="text" placeholder="Judul" className="m-2 input input-bordered w-full " onChange={(title) => setTitle(title.target.value)} defaultValue={props.myNews.title} />
                    <input type="text" placeholder="Deskripsi" className="m-2 input input-bordered w-full " onChange={(description) => setDescription(description.target.value)} defaultValue={props.myNews.description} />
                    <input type="text" placeholder="Kategori" className="m-2 input input-bordered w-full" onChange={(category) => setCategory(category.target.value)} defaultValue={props.myNews.category} />
                    <button className="btn btn-primary m-2" onClick={() => handleSubmit()}>UPDATE</button>
                </div>
            </div>
        </div>
    )
}
