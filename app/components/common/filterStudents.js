import React, { Component } from "react";
import API from "../../utils/API";


class FilterStudents extends Component {
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

			<div className="container-fluid">
				<div className="form-group">
					<label htmlFor="input-box">
						Filter Students
						<label>
						<textarea
							onChange={this.handleInputChange}
							value={this.state.inputValue}
							placeholder="Filter Students"
							className="form-control"
							id="input-box"
							rows="1"
							/>
							<button
								onClick={this.handleButtonClick}
								className="btn btn-sucess"
								// style={styles.buttonStyle}
							>
								Search
							</button>
<<<<<<< HEAD
						</label>
					</label>
				</div>
			</div>
=======
							</label>
							</label>	
						</div>
					</div>
>>>>>>> e4a88a549ced0a772729d75b7e18d29f6206ee00
				);
			}
		}

// module.exports =  {
//
// 	index: function(req, res) {
// 		var query;
// 		if(req.query) {
// 			query = req.query;
// 		}
// 		else {
// 			query = login.filter(login: req.params.login)
// 		}
// 		login.find(query)
// 			.then(function(doc) {
// 				res.json(doc);
// 			}).catch(function(err) {
// 				res.json(err);
// 			});
// 	}
// };

<<<<<<< HEAD
export default FilterStudents;
=======
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

export default studentsSearch;
>>>>>>> e4a88a549ced0a772729d75b7e18d29f6206ee00
