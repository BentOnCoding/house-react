import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const HeroListRow = ({hero}) => {

    return (
        <tr>
            <td>{hero.name}</td>
            <td>{hero.secretIdentity}</td>
            <td>{hero.nemesisId}</td>
            <td>{hero.age}</td>
        </tr>
    );

};

HeroListRow.propTypes = {
    hero: PropTypes.object.isRequired
};

export default HeroListRow;