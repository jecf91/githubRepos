import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/container';
import { Form, SubmitButton, List } from './styles';

class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
      repo: '',
      loading: false,
    };
  }

  // load from localstorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');
    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // save on localstorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;
    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { repo, repositories } = this.state;
    const response = await api.get(`/repos/${repo}`);
    const data = {
      name: response.data.full_name,
    };
    this.setState({
      repositories: [...repositories, data],
      repo: '',
      loading: false,
    });
    console.log(repositories);
  };

  handleInputChange = (e) => {
    this.setState({ repo: e.target.value });
  };

  render() {
    const { repo, repositories, loading } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar Repositório"
            value={repo}
            onChange={this.handleInputChange}
          />
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>
        <List>
          {repositories.map((repository) => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

export default main;
