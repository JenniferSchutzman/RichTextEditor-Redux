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

const EmailLayout = props => {
  const {classes, history, onChange, handleChange} = props
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
									value={props.richEditor}
									onChange={props.handleChange}
								>
									<Input
										id="rich-editor"
										value={props.richEditor}
										onChange={props.handleChange}
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
	console.log("state in mapStateToProps of EMAILFORMENTRY", state);
	return {
		emailFormData: state.emailFormEntryReducer.emailInfo,
		richEditor: state.emailFormEntryReducer.richEditor
	};
};

const mapActionsToProps = dispatch => {
	return {
		handleChange: name => event => {
			dispatch({
				type: ENTERED_RICH_EDITOR_TEXT,
				payload: event.target.value
			});
		}
	};
};

const connector = connect(mapStateToProps, mapActionsToProps);

export default connector(withStyles(styles)(EmailLayout));
