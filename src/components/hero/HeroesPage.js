import React, { PropTypes } from "react";

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
        alert(`saving ${ this.state.hero.name }`);
    }

    render() {
        return (
            <div>
                <h1>HEROES</h1>
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


export default HeroesPage;

