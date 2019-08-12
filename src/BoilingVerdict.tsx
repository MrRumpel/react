import React from 'react';

interface Props {
    celsius: number,
}

export const BoilingVerdict: React.SFC<Props> = props => {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
};
