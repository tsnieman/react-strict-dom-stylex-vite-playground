import {
    css,
    html,
} from "react-strict-dom";
// import {
//     colors,
// } from "../theme.stylex";
import { ReactNode } from "react";
import { StyleXStyles } from "@stylexjs/stylex";
import { styles } from './button.stylex';

interface Props {
    children: ReactNode;
    styles?: Array<StyleXStyles>; // TODO unsure if right typing
    variant?: 'solid' | 'outline';

    // Only accept styles for marginTop and nothing else.
    // The value for marginTop can only be 0, 4, 8 or 16.
    // style?: StyleXStyles<{
    //     marginTop: 0 | 4 | 8 | 16
    // }>,

    // Accept set of styles:
    // style?: StyleXStyles<{
    // 	color?: string;
    // 	backgroundColor?: string;
    // 	borderColor?: string;
    // 	borderTopColor?: string;
    // 	borderEndColor?: string;
    // 	borderBottomColor?: string;
    // 	borderStartColor?: string;
    // }>;

    // Disallow certain styles:
    // position: unknown, // <- disallowed style
}

export function Button({
    children,
    variant = 'solid',
    styles: passedStyles = [],
    ...props
}: Props) {
    console.log({
        // children,
        variant,
        props,
    })

    return (
        <html.button
            {...props}
            {...css.props(
                styles.button,
                styles[variant],
                ...passedStyles
            )}
        >
            {children}
        </html.button>
    );
}
