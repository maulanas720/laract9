import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import NewsList from '@/Components/Homepage/NewsList';
import Paginator from '@/Components/Homepage/Paginator';
import HeroCarousel from '@/Components/Homepage/Carousel';

export default function Homepage(props){
    return(
        <div data-theme="bumblebee" className='min-h-screen'>
            <Head title={props.title} />
            {/* Section Navbar */}
            <Navbar user={props.auth.user} />

            {/* Section Carousel */}
            <HeroCarousel />

            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:item-stretch items-center gap-4 m-4 p-4">
                <NewsList news={props.news.data} />
            </div>
            <div className="flex mb-4 justify-center items-center">
                <Paginator meta = {props.news.meta}/>
            </div>
        </div>
    )
}
