import React from "react";
import { Editor } from "react-draft-wysiwyg";

//import Input from "@material-ui/core/Input";
//import InputLabel from "@material-ui/core/InputLabel";
//import { styles } from "./EmailLayoutPC.js";
//import { ENTERED_EMAIL_FROM, ENTERED_EMAIL_SUBJECT_LINE } from "../constants";

import {
	bold,
	italic,
	unordered,
	ordered,
	left,
	center,
	link
} from "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichEditor = props => {
	const { classes, handleChange, onChange, richEditor} = props;
	return (
		<Editor
			value={props.richEditor}
			onChange={props.handleChange}
			id="name-simple"
			wrapperClassName="wrapper-class"
			editorClassName="editor-class"
			toolbarClassName="toolbar-class"
			toolbar={{
				options: [
					"inline",
					// "fontSize",
					// "fontFamily",
					"list",
					"textAlign",
					"link"
					// "embedded"
				],
				inline: {
					inDropdown: true,
					className: undefined,
					component: undefined,
					dropdownClassName: undefined,
					options: ["bold", "italic"],
					bold: { icon: bold, className: undefined },
					italic: { icon: italic, className: undefined }
				},
				list: {
					inDropdown: true,
					className: undefined,
					component: undefined,
					dropdownClassName: undefined,
					options: ["unordered", "ordered"],
					unordered: { icon: unordered, className: undefined },
					ordered: { icon: ordered, className: undefined }
				},
				textAlign: {
					inDropdown: true,
					className: undefined,
					component: undefined,
					dropdownClassName: undefined,
					options: ["left", "center"],
					left: { icon: left, className: undefined },
					center: { icon: center, className: undefined }
				},
				link: {
					inDropdown: false,
					className: undefined,
					component: undefined,
					popupClassName: undefined,
					dropdownClassName: undefined,
					showOpenOptionOnHover: true,
					defaultTargetOption: "_self",
					options: ["link"],
					link: { icon: link, className: undefined }
					// unlink: { icon: unlink, className: undefined }
				}
			}}
		/>
	);
};

export default RichEditor;
