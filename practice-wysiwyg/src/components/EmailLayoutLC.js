import React from "react";
import { connect } from "react-redux";
import {

	ENTERED_RICH_EDITOR_TEXT
} from "../constants";
import {
	FormControl,
	FormHelperText,
	FormGroup,
	FormLabel,
	FormControlLabel
} from "material-ui/Form";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

import PopupRichEditor from "./PopupRichEditor.js"


const styles = theme => ({
	// container: {
	// 	display: "flex",
	// 	flexWrap: "wrap"
	// },
	root: {
		display: "50%",
		width: "50%",

		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3
		//	marginBottom: theme.spacing.unit * 50
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: "50%"
	},

	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular
	},
	formControl: {
		margin: theme.spacing.unit
	}
	// menu: {
	// 	width: 200
	// },
	// formControl: {
	// 	margin: theme.spacing.unit
	// }
});

const EmailLayout = props => {
  const {classes, history, onChange, handleChange, richEditor, emailFormData} = props
	console.log("emailFormData in mapStateToProps in EmailLayoutLC", emailFormData)
	console.log("richEditor state in EmailLayoutLC", richEditor);
  return (

    <div className={classes.root}>
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>Email Layout</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<div>
							<FormControl className={classes.formControl}>
								<PopupRichEditor
									id="rich-editor"
									value={richEditor}
									onChange={handleChange}
								>
									<Input
										id="rich-editor"
										value={richEditor}
										onChange={handleChange}
									/>
								</PopupRichEditor>
							</FormControl>

					</div>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
}

const mapStateToProps = state => {

	return {
		emailFormData: state.emailFormEntryReducer.emailInfo,
		richEditor: state.emailFormEntryReducer.richEditor
	};
};

const mapActionsToProps = dispatch => {
	return {
		handleChange: event => value => {
			dispatch({
				type: ENTERED_RICH_EDITOR_TEXT,
				payload: event.target.value
			});
		}
	};
};

const connector = connect(mapStateToProps, mapActionsToProps);

export default connector(withStyles(styles)(EmailLayout));
