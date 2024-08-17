import React from 'react';

const App = () => {
  return (
    <section className='pt-5'>
    <h2> Router Task</h2>
    <div className="flex gap-10 mt-10 ps-11">
        <a href="/">Home</a>
        <a href="/about-us">About</a>
        <a href="/contact-page">contact-us</a>
        <a href="/blog">Blog</a>
    </div>
</section>

  );
};

export default App;
