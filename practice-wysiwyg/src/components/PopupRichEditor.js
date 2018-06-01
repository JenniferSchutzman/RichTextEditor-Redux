import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import RichEditor from "./RichEditor.js";
import { withStyles } from "@material-ui/core/styles";
//import { withStyles } from "@material-ui/core/styles";
//import MenuItem from "@material-ui/core/MenuItem";
//import TextField from "@material-ui/core/TextField";

const styles = theme => ({
	buttons: {
		margin: theme.spacing.unit
	}
});

class PopupRichEditor extends React.Component {
	state = {
		open: false
	};

	handleClickOpen = () => {
		this.setState({
			open: true
		});
	};
	handleClose = value => {
		this.setState({ open: false });
	};
	// handleChange = name => event => {
	// 	this.setState({
	// 		[name]: event.target.value
	// 	});
	// };

	render() {
		const { classes } = this.props;
		return (
			<div>
				<Button
					variant="raised"
					color="primary"
					className={classes.button}
					onClick={this.handleClickOpen}
				>
					WRite Email Now
				</Button>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">
						{"Write your customized email below"}
					</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							<form>
								<RichEditor />
							</form>
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Cancel
						</Button>
						<Button onClick={this.handleClose} color="primary" autoFocus>
							Finished: Review Template
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(PopupRichEditor);
