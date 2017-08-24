import React, { PropTypes } from "react";
import HeroListRow from "./HeroListRow";

const HeroList = ({ heroes, deleteHero }) => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Secret Identity</th>
                    <th>Nemesis</th>
                    <th>Age</th>
                </tr>
            </thead>

            <tbody>
                {heroes.map(hero =>
                    <HeroListRow key={hero.id} hero={hero} />
                )}
            </tbody>
        </table>
    );

};

HeroList.propTypes = {
    heroes: PropTypes.array.isRequired
};

export default HeroList;