import React from 'react';
 
  const AddBook = () => (
    <div className='addBook'>
     <form>
       <label>Title</label><br />
       <input name="title"/><br />
       <label>Author</label><br />
       <input name="author"/><br />
       <label>Year</label><br />
       <input name="year"/><br />
       <label>ISBN</label><br />
       <input name="isbn"/><br />
       <label>Price</label><br />
       <input name="price"/><br />
       <label>Description</label><br />
       <input name="description"/><br />
       <label>Number of units</label><br />
       <input name="nou"/><br />
     </form>
     <button>
       Submit
     </button>
    </div>
  );

export default AddBook;