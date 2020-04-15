import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    
    state = {
        isLightTheme: true,
        light: {
            syntax: '#070A0E', // For text
            ui: '#FFFFFF', // For buttons, etc.
            bg: '#CCD6DD', // For background
            title: '#070A0E', // For title
        },
        dark: {
            syntax: '#FFFFFF', // For text
            ui: '#070A0E', // For buttons, etc.
            bg: '#121B23', // For background
            title: '#00D395', // For title
        }
    }

    toggleTheme = () => {
        this.setState({
            isLightTheme: !this.state.isLightTheme
        });
    }

    render() { 
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;
