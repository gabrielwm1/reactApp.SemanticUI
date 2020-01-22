import React, { Component } from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

class App extends Component {
    constructor(props) {
        super(props);

        //sttate
        this.state = {
            players: [
                {
                    name: "gabriel",
                    id: "1"
                },
                {
                    name: "betty",
                    id: "2"
                }
            ]
        };

        //binding functions
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.players.map(player => (
                        <CommentDetail name={player.name} />
                    ))}
                </div>

                <form className="ui form">
                    <div className="field">
                        <label>First Name</label>
                        <input
                            type="text"
                            name="first-name"
                            placeholder="First Name"
                        ></input>
                    </div>
                    <div className="field">
                        <div className="ui checkbox">
                            <input
                                type="checkbox"
                                tabIndex="0"
                                className="hidden"
                            ></input>
                        </div>
                    </div>
                    <button className="ui button" type="submit">
                        submit
                    </button>
                </form>

                {/* <form className="ui form">
                    <div className="ui input focus">
                        <input type="text" placeholder="Search..."></input>
                    </div>

                    <div className="field">
                        <textarea></textarea>
                    </div>
                </form> */}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
