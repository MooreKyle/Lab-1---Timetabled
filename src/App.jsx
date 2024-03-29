import './App.css';
import Calendar from './components/Calendar'; // Imports the 'Calendar' component

const App = () => {

  return (
    <div className="App">
      <h1>Itinerary for 🍀 Ireland 🍀</h1> {/* Replace with your project title */}
      <h2>Welcome to Ireland, Kyle! Check out this calendar to get to know the island and see all the sights during your stay.</h2> {/* Replace with your schedule message */}
      <Calendar /> {/* The Calendar component goes here */} {/* Additional components and JSX elements will go here */}
    </div>
  );
}

export default App;