import React, { Component } from "react";
import API from "../../utils/API";


class studentsSearch extends component {
	constructor() {
		super();
		this.state = {
			inputValue: ""
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}
	handleInputChange(event) {
		this.setState({ inputValue: event.target.value});
	}
	handleButtonClick() {
		const username = this.state.inputValue;
		API.searchUsername(login).then(this.props.getStudents);
		this.setState({ inputValue: ""});
	}
	render() {
		return (
			<div classname= "col-md-6 col-md-offset-3">
				<div style={styles.formStyle} className="form-group">
					<label htmlFor="input-box">
						Filter Students
						<label>
						<textarea
							style={{
								resize: "none"
							}}
							onChange={this.handleInputChange}
							value={this.state.inputValue}
							placeholder="Filter Students"
							classname="form-control"
							id="input-box"
							rows="1"
							/>
							<button
								onClick={this.handleButtonClick}
								classname="btn btn-sucess"
								style={styles.buttonStyle}
							>
								Search
							</button>
							</label>
							</label>	
						</div>
					</div>
				);
			}
		}


module.exports =  {

	index: function(req, res) {
		var query;
		if(req.query) {
			query = req.query;
		}
		else {
			query = login.filter(login: req.params.login)
		}
		login.find(query)
			.then(function(doc) {
				res.json(doc);
			}).catch(function(err) {
				res.json(err);
			});
	}
};

export default filterStudents;