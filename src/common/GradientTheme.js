import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

export const GradientTheme = ({ theme, children }) => {

    const { primary, primaryGradient2, primaryGradient1, locations } = theme;
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[primary, primaryGradient2]}
            style={{ flex: 1 }}
        // colors={[primary, primaryGradient2]}
        // locations={locations}
        >
            {children}
        </LinearGradient>
    );
};

GradientTheme.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    theme: PropTypes.object
};