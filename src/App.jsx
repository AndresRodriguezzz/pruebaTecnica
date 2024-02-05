import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { UserCard } from './components/userCard';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyapi.io/data/api/user', {
          headers: {
            'app-id': '63473330c1927d386ca6a3a5',
          },
        });
        setUsers(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </Layout>
  );
}

export default App;
