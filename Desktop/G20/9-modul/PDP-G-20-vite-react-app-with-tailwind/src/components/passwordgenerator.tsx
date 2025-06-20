import React, { Component } from "react";
import Options from "./options.tsx";
import Output from "./output.tsx";
import CopyButton from "./copybutton.tsx";
import Level from "./level.tsx";


interface State {
  useNumbers: boolean;
  useLowercase: boolean;
  useUppercase: boolean;
  useSymbols: boolean;
  useSpaces: boolean;
  password: string;
  length: number;
}

class PasswordGenerator extends Component<{}, State> {
  state: State = {
    useNumbers: false,
    useLowercase: false,
    useUppercase: false,
    useSymbols: false,
    useSpaces: false,
    password: "",
    length: 12,
  };

  generatePassword = () => {
    const {
      useNumbers,
      useLowercase,
      useUppercase,
      useSymbols,
      useSpaces,
      length,
    } = this.state;

    const numbers = "0123456789";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*()_+-\\[]{}<>?/";
    const space = " ";

    let allChars = "";
    if (useNumbers) allChars += numbers;
    if (useLowercase) allChars += lower;
    if (useUppercase) allChars += upper;
    if (useSymbols) allChars += symbols;
    if (useSpaces) allChars += space;

    if (!allChars) return alert("No parameters selected");

    let password = "";
    for (let i = 0; i < length; i++) {
      password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    this.setState({ password });
  };
  

  toggleOption = (key: keyof State) => {
    this.setState((prev) => ({ [key]: !prev[key] }) as Pick<State, keyof State>);
  };

  
  changeLevel = () => {
    this.setState((prev) => ({ length: prev.length + 1 }));
  };
  

  render() {
    const { password, length } = this.state;
    return (
      <div>
        <h1>Password Generator</h1>
        <Options toggler={this.toggleOption} />
        <button
          onClick={this.generatePassword}
          className="output-box"
        >
          Generate
        </button>
        <Output password={password} />
        <CopyButton password={password} />
        <Level onClick={this.changeLevel} level={length}  />



      </div>
    );

    
  }
}



export default PasswordGenerator;