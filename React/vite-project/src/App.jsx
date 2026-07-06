import Address from './assets/Address';
import Father from './assets/Father';
import Info from './assets/Info';
import Mother from './assets/Mother';
import CosmosLink from './Cosmoslink';
import CosmosRoute from './CosmosRoute';

const App = () => {
  let name = "Bivhas";
  let lname = "Devkota";

  let products = [
    { name: "Laptop", price: 50000, _id: 1, quantity: 10 },
    { name: "Mobile", price: 20000, _id: 2, quantity: 20 },
    { name: "Tablet", price: 30000, _id: 3, quantity: 30 },
    { name: "Charger", price: 3000, _id: 4, quantity: 300 },
    { name: "SSD", price: 12000, _id: 5, quantity: 80 },
    { name: "Battery", price: 10000, _id: 6, quantity: 60 },
    { name: "MACBook", price: 300000, _id: 7, quantity: 20 },
  ];

  let users = [
    {name: "Bivhas",surname: "Devkota",_id: 1,age: 20,gender: "male",email: "bivhasdevkota@gmail.com",image: "a.jpeg",width: "350px",height: "350px"},
    {name: "Sita",surname: "Thapa",_id: 2,age: 30,gender: "female",email: "sitathapa425@gmail.com",image: "b.jpeg",width: "350px",height: "350px"},
    {name: "Rita",surname: "Thapa",_id: 3,age: 30,gender: "female",email: "ritathapa425@gmail.com",image: "c.jpeg",width: "350px",height: "350px"},
    {name: "Kamal",surname: "Thapa",_id: 4,age: 30,gender: "male",email: "anushathapa425@gmail.com",image: "d.jpg",width: "350px",height: "350px"},
  ];

  return (
    <div>
      <h1 style={{ backgroundColor: "blue" }}>Details</h1>

      <p style={{ color: "green" }}>Name is {name}</p>
      <p style={{ border: "solid red 2px" }}>Surname is {lname}</p>
      <p>The sum of 1 + 1 is {1 + 1}</p>

      <img src="a.jpeg" width="350px" height="350px" alt="user" />

      {/* Users List */}
      {users.map((item) => {
        return (
          <div
            key={item._id}
            style={{
              border: "solid gray 2px",
              margin: "10px",
              padding: "10px",
            }}
          >
            <p>First Name: {item.name}</p>
            <p>Last Name: {item.surname}</p>
            <p>ID: {item._id}</p>
            <p>Age: {item.age}</p>
            <p>Gender: {item.gender}</p>
            <p>Email: {item.email}</p>

            <img src={item.image}width={item.width}height={item.height}alt={item.name} / >
          </div>
        );
      })}
      <Address></Address>
      <Father name ="Balram" surname ="Devkota"age={41}></Father>
      <Mother name ="Manju" surname ="Tiwari"age={37}>
        <h1>Mother Details</h1>
      </Mother>
      <Info name="Bivhas" surname="Devkota" ward ={25}></Info>
      <p className ="success">This is success message</p>
      <p className='error'>This is error message</p>
      <p className='warning'>This is warning message</p>
    
    <CosmosLink></CosmosLink>
    <CosmosRoute></CosmosRoute>
    </div>
  );
};

export default App;