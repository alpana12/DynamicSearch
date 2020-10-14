import React from 'react';

import './App.css';

import NamesContainer from './NamesContainer';

class App extends React.Component {

  state = {
    names: [    
'Liam','Noah','William','James','Oliver','Benjamin','Elijah','Lucas','Mason','Logan','Alexander','Ethan','Jacob','Michael','Daniel','Henry','Jackson','Sebastian','Aiden','Matthew','Samuel','David','Joseph','Carter','Owen','Wyatt','John','Jack','Luke','Jayden','Dylan','Grayson','Levi','Isaac','Gabriel','Julian','Mateo','Anthony','Jaxon','Lincoln','Joshua','Christopher','Andrew','Theodore','Caleb','Ryan','Asher','Nathan','Thomas','Leo','Isaiah','Charles','Josiah','Hudson','Christian','Hunter','Connor','Eli','Ezra','Aaron','Landon','Adrian','Jonathan','Nolan','Jeremiah','Easton','Elias','Colton','Cameron','Carson','Robert','Angel','Maverick','Nicholas','Dominic','Jaxson','Greyson',
'Adam','Ian','Austin','Santiago','Jordan','Cooper','Brayden','Roman','Evan','Ezekiel','Xavier','Jose','Jace','Jameson','Leonardo','Bryson','Axel','Everett',
'Parker','Kayden','Miles','Sawyer','Jason','Declan','Weston','Micah','Ayden','Wesley','Luca','Vincent','Damian','Zachary','Silas','Gavin','Chase','Kai','Emmett','Harrison','Nathaniel','Kingston','Cole','Tyler','Bennett','Bentley','Ryker','Tristan',
'Brandon','Kevin','Luis','George','Ashton','Rowan','Braxton','Ryder','Gael','Ivan','Diego','Maxwell','Max','Carlos','Kaiden','Juan','Maddox','Justin','Waylon','Calvin','Giovanni','Jonah','Abel','Jayce','Amir','King','Beau','Camden','Alex','Jasper','Malachi','Brody','Jude',
'Blake','Emmanuel','Eric','Brooks','Elliot','Antoni','Abraham','Timothy','Finn','Rhett','Elliott','Edward','August','Xander','Alan','Dean','Lorenzo','Bryce','Karter','Victor','Milo','Miguel','Hayden','Graham','Grant','Zion','Tucker','Jesse','Zayden','Joel','Richard','Patrick','Emiliano','Avery','Nicolas','Brantley','Dawson','Myles','Matteo','River','Steven','Jalen','Nikolas','Braylon','Kamari','Dennis','Callum','Justice','Soren','Rayan','Aarav','Gerardo','Ares','Brendan',
'Jamari','Kaison','Yusuf','Issac','Jasiah','Callen','Forrest','Makai','Crew','Kobe','Bo','Julien','Mathew','Braden','Johan','Marvin','Zaid','Stetson','Casey','Ty','Ariel','Tony','Zain','Callan','Cullen','Sincere','Uriah','Dillon','Kannon','Colby','Axton','Cassius','Quinton','Mekhi','Reece','Alessandro','Jerry','Mauricio','Sam','Trey','Mohammad','Alberto','Gustavo','Arturo','Fletcher','Marcelo','Abdiel','Hamza','Alfredo','Chris','Finnley','Curtis','Kellan','Quincy','Kase','Harry','Kyree','Wilson','Cayson','Hezekiah',
'Kohen','Neil','Mohammed','Raylan','Kaysen','Lucca','Sylas','Mack','Leonard','Lionel','Ford','Roger','Rex','Alden','Boston','Colson','Briggs',
'Zeke','Dariel','Kingsley','Valentino','Jamir','Salvador','Vihaan','Mitchell','Lance','Lucian','Darren','Jimmy','Alvin','Amos','Tripp','Zaire','Layton',
'Reese','Casen','Colten','Brennan','Korbin','Sonny','Bruno','Orlando','Devon','Huxley','Boone','Maurice','Nelson','Douglas','Randy','Gary',
'Lennon','Titan','Denver','Jaziel','Noe','Jefferson','Ricky','Lochlan','Rayden','Bryant','Langston','Lachlan','Clay','Abdullah','Lee','Baylor','Leandro','Ben','Kareem','Layne','Joe','Crosby','Deandre','Demetrus','Ridge','Bronson',
'Jedidia','Rohan','Larry','Stanley','Tomas','Shiloh','Thaddeus','Watson','Baker','Vicente','Koda','Jagger','Nathanael','Carmelo','Shepherd','Graysen',
'Melvin','Ernesto','Jamie','Yosef','Clyde','Eddie','Coleman','Markus','Khloe','Alpana','Hubert','Will','Obama','Trump','Biden','Hillary'
    ],
    searchTerm: ''
  }

  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }


    render(){
      return (
        <div style = {{textAlign: 'left'}}>
        <h2>Dynamic Search</h2>
          <input type= 'text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search for a name!'/>
          <br></br>
          <h3>Top Baby Boy Names</h3>
          <NamesContainer names = {this.dynamicSearch()}/>
        </div>
      );
    }
}

export default App;
