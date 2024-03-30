import Card from './Card.js';
import Student from './Student.js'
import UserGreeting from './UserGreeting.js';





function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '100%' }}>
      <div style={{ flex: '0 0 30%' }}>
        <UserGreeting isLoggedIn={true}/>
      </div>
      <div style={{ flex: '0 0 30%' }}>
        <h2>PROPS EXERCISES</h2>
        <Student name={'Toghrul'} age={24} isStudent={true} />
        <Student />
        <Student />
        <Student />
      </div>
      <div style={{ flex: '0 0 30%' }}>

        <h1>REACT CARD EXERCISES</h1>
        <Card />
      </div>
    </div>
  );
}





export default App;
