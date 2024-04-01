import { css } from "react-strict-dom";
import {
    // DARK,
    colors,
} from "../theme.stylex";

export const styles = css.create({
    button: {
        backgroundColor: colors.brand,
        padding: 24,
        ':hover': {
            default: null,
            '@media (hover: hover)': {
                transform: 'scale(1.1)',
            },
        },
        ':active': {
            transform: 'scale(0.5)',
            color: 'red',
        },
        // // 
        // TODO Not working with `vite-plugin-stylex` yet?
        // Example adapted from https://stylexjs.com/docs/learn/theming/defining-variables/#using-media-queries
        // [DARK]: {
        // 	backgroundColor: 'black',
        // 	color: 'white',
        // },
    },

    solid: {
        backgroundColor: '#ff00aa',
        color: 'green',
    },

    outline: {
        backgroundColor: 'transparent',
        color: '#00aaff',
        fontWeight: 'bold',
        border: '1px solid pink',
    },
});
