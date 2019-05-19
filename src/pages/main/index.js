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
        </form>

        <ul>
          {favorites.map(fav => (
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

Main.propTypes = {
  addFavoriteRequest: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
