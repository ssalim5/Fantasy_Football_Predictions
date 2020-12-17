import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
function App() {
  let weeks = [10,11,12,13,14];
  let weekOptions = weeks.map(item=>{
    return (<option value={item} key={item}>Week {item}</option>)
  });
  const [selectedWeek , setSelectedWeek]= useState(14);
  let playerDataKeys =["position", "team", "name", "points"];
  let playerColumns = playerDataKeys.map((item, index)=>{
    return( <th key={index}>{item}</th>)
  });
  let players = [
            {"position":"QB", "team":"Giants", "name":"Eli", "points":20},
            {"position":"QB", "team":"Giants", "name":"Eli", "points":20},
            {"position":"QB", "team":"Giants", "name":"Eli", "points":20},
            {"position":"QB", "team":"Giants", "name":"Eli", "points":20}
              ];
  let playersBody = players.map((item, index)=>{
    return (<tr key={index}>
        <td>{item.position}</td>
        <td>{item.team}</td>
        <td>{item.name}</td>
        <td>{item.points}</td>
    </tr>)
  })
  return (
    <div className="App">
      <header className="App-header">
       Welcome to Fantasy Football Predictions

      </header>
      <div className="container">
        <div className="question">
          <label>What week of the nfl ?</label>
          <select onChange={(e)=>{
            console.log(e);
            setSelectedWeek(e.target.value);
          }} value={selectedWeek}> 
            {weekOptions}
          </select>
        </div>
        <div className="results">
            <table>
              <thead>
                <tr> {playerColumns}</tr>              
              </thead>
              <tbody>
              {playersBody}
              </tbody>
            </table>
        </div>
        
      </div>
    </div>
  );
}

export default App;
