import { useState } from 'react';

const Home = () => {
    const [pages, setPages] = useState([
        { title: 'Our new document', body: 'lorem ipsum....', author: 'Emmanuel', id: 1},
        { title: 'Welcome onboard!', body: 'lorem ipsum....', author: 'Oye', id: 2},
        { title: 'Problems Observed', body: 'lorem ipsum....', author: 'Jennifer', id: 3}
    ]);
    return (
        <div className="home">
           {pages.map((page) => (
               <div className="page-preview" key={page.id}>
                   <h2>{page.title}</h2>
                   <p>Written by {page.author}</p>
               </div>
           ))} 
        </div>
    );
}
 
export default Home;