import Card from './Card.js';
import Student from './Student.js'
import UserGreeting from './UserGreeting.js';
import List from './List.js'





function App() {
  const foods = [
    { id: 0, name: "adana", calories: 250 },
    { id: 1, name: "pizza", calories: 825 },
    { id: 2, name: "doner", calories: 285 },
    { id: 3, name: "pirogi", calories: 425 },
    { id: 4, name: "kabab", calories: 250 }
  ]
  const vegtables = [
    { id: 5, name: "apple", calories: 25 },
    { id: 6, name: "banana", calories: 82 },
    { id: 7, name: "cherry", calories: 25 },
    { id: 8, name: "pinapple", calories: 42 },
    { id: 9, name: "pear", calories: 20 }
  ]

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '100%' }}>
      <div style={{ flex: '0 0 20%' }}>
        <UserGreeting isLoggedIn={true} />
      </div>
      <div style={{ flex: '0 0 20%' }}>
        <h2>PROPS EXERCISES</h2>
        <Student name={'Toghrul'} age={24} isStudent={true} />
        <Student />
        <Student />
        <Student />
      </div>
      <div style={{ textAlign: 'center', flex: '0 0 20%' }}>

        <h1>REACT CARD EXERCISES</h1>
        <Card />
      </div>
      <div style={{  flex: '0 0 20%' }}>



        <List  items={foods} category='Food' />
        <List items= {vegtables} category='Vegtables'/>


      </div>
    </div>

  );
}





export default App;
