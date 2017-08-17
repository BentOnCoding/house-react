import React, { PropTypes } from "react";
import {connect} from "react-redux";
import * as heroActions from "../../actions/heroActions";
import {bindActionCreators} from  "redux";

class HeroesPage extends React.Component {

    constructor(props, context) {

        super(props, context);

        this.state = {
            hero: { name: "" }
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onNameChange(event) {
        const hero = this.state.hero;
        hero.name = event.target.value;
        this.setState({ hero: hero });
    }

    onClickSave(event) {
        this.props.actions.createHero(this.state.hero);
    }

    heroRow(hero, index){
        return <div key={index}>{hero.name}</div>;
    }

    render() {
        return (
            <div>
                <h1>HEROES</h1>
                {this.props.heroes.map(this.heroRow)}
                <h2>Add Hero</h2>
                <input
                    type="text"
                    onChange={this.onNameChange}
                    value={this.state.hero.name} />

                <input 
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        heroes: state.heroes
    };
}

function mapDispatchToProps(dispatch){
    return { 
        actions: bindActionCreators(heroActions, dispatch)
    };
}

HeroesPage.propTypes = {
    heroes: PropTypes.array.isRequired, 
    actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroesPage);

