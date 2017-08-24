import React, { PropTypes } from "react";
import { connect } from "react-redux";
import * as heroActions from "../../actions/heroActions";
import { bindActionCreators } from "redux";
import HeroList from "./HeroList";

class HeroesPage extends React.Component {

    constructor(props, context) {

        super(props, context);

        this.state = {
            hero: { name: "" }
        };
    }

    heroRow(hero, index) {
        return (
            <div>
                <div key={index}>
                    {hero.name}
                </div>
                <div>
                    {hero.secretIdentity}
                </div>
            </div>
        );

    }

    render() {
        const {heroes} = this.props;

        return (
            <div>
                <h1>HEROES</h1>
                <HeroList heroes={heroes} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        heroes: state.heroes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(heroActions, dispatch)
    };
}

HeroesPage.propTypes = {
    heroes: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroesPage);

