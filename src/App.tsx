import { useState } from 'react'
import { css, html } from "react-strict-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
	// DARK,
	colors, 
} from "./theme.stylex";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <html.div>
                <html.a href="https://vitejs.dev" target="_blank">
                    <html.img src={viteLogo} alt="Vite logo" />
                </html.a>
                <html.a href="https://react.dev" target="_blank">
                    <html.img src={reactLogo} alt="React logo" />
                </html.a>
            </html.div>

            <html.h1>
                {`Vite + React + react-strict-dom + `}
                <html.span style={[styles.example]}>
                    stylex
                </html.span>
            </html.h1>

            <html.div>
                <html.button
					style={[styles.button]}
					onClick={() => setCount((count) => count + 1)}
				>
                    count is {count}
                </html.button>

                <html.p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </html.p>
            </html.div>

            <html.p>
                Click on the Vite and React logos to learn more
            </html.p>
        </>
    )
}

const styles = css.create({
    example: {
        backgroundColor: "white",
        borderRadius: 8,
        padding: 16,
        boxShadow: "0 0 16px rgba(0, 0, 0, 0.1)",
        color: `${colors.brand}`,
        border: '1px solid #00aaff',
        outlineColor: '#ff00aa',
    },

    button: {
		padding: 16,
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
});

export default App
