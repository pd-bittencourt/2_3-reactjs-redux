import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoriteActions from '../../store/actions/favorites';

class Main extends Component {
  state = {
    repositoryInput: '',
  };

  handleAddRepository = (e) => {
    e.preventDefault();
    const { addFavoriteRequest } = this.props;
    const { repositoryInput } = this.state;

    addFavoriteRequest(repositoryInput);
    this.setState({ repositoryInput: '' });
  };

  render() {
    const { repositoryInput } = this.state;
    const { favorites } = this.props;
    return (
      <>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>
          {favorites.loading && <span>Carregando...</span>}
          {!!favorites.error && <span>{favorites.error}</span>}
        </form>

        <ul>
          {favorites.data.map(fav => (
            <li key={fav.id}>
              <p>
                <strong>{fav.name}</strong> ({fav.description})
              </p>
              <a href={fav.url}>Acessar</a>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
Main.defaultProps = {
  favorites: PropTypes.shape({
    error: null,
  }),
};

Main.propTypes = {
  addFavoriteRequest: PropTypes.func.isRequired,
  favorites: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
      }),
    ),
    error: PropTypes.string,
  }),
};

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
