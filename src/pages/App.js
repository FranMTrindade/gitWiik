import { useState } from 'react';
import gitLogo from '../assets/gitLogo.png'
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';
import Button from '../components/Button';
import {api} from '../services/api'


const App = () => {

  const [currentRepo, setCurrentRepo] = useState ('');
  const [repos, setRepos] = useState ([]);

  const handleBuscarRepo = async () => {
    
    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){
      setRepos(prev => [...prev, data]);
      setCurrentRepo('');
      return
    }
    alert('Repositório não encontrado')
  }



  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>  
      <Button onClick={handleBuscarRepo}/>
      {repos.map(repo => <ItemRepo repo={repo}/>)}
    </Container>
  );
}

export default App;
