//import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data using axios when component loads
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data); // store data in state
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3>Loading posts...</h3>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts from API (Axios Demo)</h2>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}





function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}


function UseEffectEg() {
  const [count, setCount] = useState(0);

  // useEffect runs after every render when "count" changes
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // dependency array

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React Hook (useEffect) Demo</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}



const Counter2 = ()=> {
  // Declare a state variable "count" with initial value 0
  const [count, setCount] = useState(0);

  // Function to increase count
  const increase = () => setCount(count + 1);

  // Function to decrease count
  const decrease = () => setCount(count - 1);

  // Function to reset count
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React State Management Demo</h2>
      <h3>Count: {count}</h3>

      <button onClick={increase} style={{ margin: "5px" }}>
        ➕ Increase
      </button>
      <button onClick={decrease} style={{ margin: "5px" }}>
        ➖ Decrease
      </button>
      <button onClick={reset} style={{ margin: "5px" }}>
        🔄 Reset
      </button>
    </div>
  );
}



function Counter() {
  const [count, setCount] = useState(0); // useState hook

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}



const Hello = (props) => {

return (
<div>
  <h2> Hello {props.name} </h2>
</div>

)
}

const Hello2 = (props) => {

return (
<div>
  <h2> Hello {props.name} Age is {props.age1} </h2>
</div>

)
}


const Home = () => {

return (
<div>
  <h2> Home Component</h2>
</div>

)
}

const About = () => {

return (
<div>
  <h2> About Component</h2>
</div>

)
}

const Contact = () => {

return (
<div>
  <h2> Contact Component</h2>
</div>

)
}


const App = () => {
const now = new Date()
console.log('Welcome to component')
const a = 10
const b = 20
return (

<div> 
 <h1> Congratulation, You completed first react app
 </h1>
 <p> Hello Time = {now.toString()} </p>
 <p> 
  { a } + {b} = {a + b}
 </p>
<Home />
<About />
<Contact />
<Hello name='Sanjay' />
<Hello name='Arjun' />
<Hello2 name='Sanjay' age1='40' />
<Hello2 name='Arjun' age1='19' />

<Counter />

<Counter2 />

<UseEffectEg />

<UserList />

<PostList />


</div>

)
}

export default App;