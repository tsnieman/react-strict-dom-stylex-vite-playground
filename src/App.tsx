import { useState } from 'react'
import { css, html } from "react-strict-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { colors } from "./theme.stylex";
import { Button } from './_components/button';

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
                    style={[styles.customButton]}
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

            <html.div style={[styles.column]}>
                <html.h2>
                    Buttons
                </html.h2>

                <html.div
                    style={[
                        styles.row,
                        {
                            gap: '20px',
                        },
                    ]}
                >
                    <Button>
                        default (no variant)
                    </Button>

                    <Button
                        styles={[styles.customButton]}
                    >
                        default (w/ custom styles)
                    </Button>

                    <Button
                        // style={[styles.customButton]}
                        variant="solid"
                    >
                        solid
                    </Button>

                    <Button
                        // style={[styles.customButton]}
                        variant="outline"
                    >
                        outline
                    </Button>
                </html.div>
            </html.div>
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

    row: {
        display: 'flex',
        flexDirection: 'row',
    },

    column: {
        display: 'flex',
        flexDirection: 'column',
    },

    customButton: {
        backgroundColor: 'pink',
        fontSize: 32,
    },
});

export default App
