import React from 'react';
import { View } from 'react-native';
import Store from 'react-native-simple-store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Board from './Board';
import LevelPicker from './LevelPicker';
import Menu from './Menu';
import Settings from './Settings';
import Instructions from './Instructions';
import { ActionCreators } from '../actions';
import LevelUtils from './utils/LevelUtils';

class GameMaster extends React.Component {
    constructor() {
        super();
        this.levelUp = this.levelUp.bind(this);
        this.setCompleteRoute = this.setCompleteRoute.bind(this);
    }

    setCompleteRoute(route, gameState) {
        let newRoute = route;
        const boardState = gameState || this.props.boardStateCache;
        if (newRoute === 'won') {
            newRoute = 'menu';
            this.props.setMode('SQUARE');
            this.props.setModal('default');
            this.props.setBoardStateCache(null);
            this.props.setLevel(null);
        } else if (newRoute === 'gameOver') {
            newRoute = 'menu';
            this.props.setMode('SQUARE');
            this.props.setModal('default');
            this.props.setBoardStateCache(null);
        } else if (newRoute === 'menu' || newRoute === 'picker') {
            this.props.setBoardStateCache(boardState);
        }
        this.props.setRoute(newRoute);
    }

    levelUp() {
        const nextLevel = this.props.level + 1;
        if (this.props.highestLevel < nextLevel) {
            Store.save('highestLevel', nextLevel);
            this.props.setHighestLevel(nextLevel);
        }
        this.props.setLevel(nextLevel);
        this.props.setModal('default');
        this.props.setBoardStateCache(null);
    }

    render() {
        const levelSpec = LevelUtils.getLevelSpecs(this.props.level);
        return (
            <View style={{ flex: 1, backgroundColor: '#CECDCD' }}>
                {this.props.routes.menu ?
                    <Menu
                      setCompleteRoute={this.setCompleteRoute}
                    /> : null}
                {this.props.routes.game ?
                    <Board
                      levelSpec={levelSpec}
                      key={this.props.level}
                      levelUp={this.levelUp}
                      setCompleteRoute={this.setCompleteRoute}
                    /> : null}
                {this.props.routes.picker ?
                    <LevelPicker setCompleteRoute={this.setCompleteRoute} /> : null}
                {this.props.routes.instructions ?
                    <Instructions setCompleteRoute={this.setCompleteRoute} /> : null}
                {this.props.routes.settings ?
                    <Settings setCompleteRoute={this.setCompleteRoute} /> : null}
            </View>
        );
    }
}

GameMaster.propTypes = {
    routes: PropTypes.object.isRequired,
    level: PropTypes.number,
    boardStateCache: PropTypes.object,
    setLevel: PropTypes.func.isRequired,
    setBoardStateCache: PropTypes.func.isRequired,
    setRoute: PropTypes.func.isRequired,
    setHighestLevel: PropTypes.func.isRequired,
    highestLevel: PropTypes.number.isRequired,
    setMode: PropTypes.func.isRequired,
    setModal: PropTypes.func.isRequired,
};

GameMaster.defaultProps = {
    boardStateCache: null, // makes it easy to write exist() logic
    level: null,
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        routes: state.routes,
        level: state.level,
        highestLevel: state.highestLevel,
        score: state.score,
        boardStateCache: state.boardStateCache,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameMaster);
