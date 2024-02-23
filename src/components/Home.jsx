// Home.js
import React from 'react';

function Home() {
  // Assuming user details are received as props
  const user = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
    address: '123 Main St, City, Country',
  };

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
    </div>
  );
}

export default Home;
