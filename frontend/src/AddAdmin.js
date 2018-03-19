import React from 'react';
 
  const AddAdmin = () => (
    <div className='addAdmin'>
     <form>
       <label>Username</label><br />
       <input name="username"/><br />
       <label>Password</label><br />
       <input name="password"/><br />
       <label>First Name</label><br />
       <input name="fname"/><br />
       <label>Last Name</label><br />
       <input name="lname"/><br />
       <label>E-mail</label><br />
       <input name="email"/><br />
       <label>Phone</label><br />
       <input name="phone"/><br />
       <label>Birthday</label><br />
       <input name="birthday"/><br />
       <label>Address</label><br />
       <input name="address" /><br />
     </form>
     <button>
       Submit
     </button>
    </div>
  );

export default AddAdmin;