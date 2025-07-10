import { useState } from 'react';
import gitLogo from '../assets/logo_github.png'
import Input from '../components/Input';
import Button from "../components/Button";
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container, RepoList } from "./styles";
function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find((repo) => repo.id === data.id);

        if (!isExist) {
          setRepos((prev) => [...prev, data]);
          setCurrentRepo("");
          return;
        }

        alert("Repositório já está na lista.");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert(
          "Repositório não encontrado. Verifique o nome e tente novamente."
        );
      } else {
        alert("Erro ao buscar o repositório. Tente novamente mais tarde.");
      }
    }
  };

  const handleRemoveRepo = (id) => {
    setRepos((prev) => prev.filter((repo) => repo.id !== id));
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      <RepoList>
        {repos.map((repo) => (
          <ItemRepo
            key={repo.id}
            handleRemoveRepo={handleRemoveRepo}
            repo={repo}
          />
        ))}
      </RepoList>
    </Container>
  );
}

export default App;
