// import logo from './logo.svg';

import GoalList from './components/GoalList';
import './App.css';

function App() {

  const courseGoals = [
    { id: 'cg1', text: 'Finish the course' },
    { id: 'cg2', text: 'Learn all about the course main topic' },
    { id: 'cg3', text: 'Help other students in the course Q&A' },
    { id: 'cg4', text: 'Finish up!!'}
  ];

  return (
    <div>
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals}/>
    </div>
  );
}

export default App;
