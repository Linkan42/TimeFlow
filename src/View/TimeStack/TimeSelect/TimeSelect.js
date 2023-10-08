import { TextField, Stack, Button, List, ListItemButton, Grid, Checkbox} from "@mui/material";
import React, {Component, useState} from "react"; //linter magic
import "./TimeSelect.css";
import useUpdateTimeSelect from "./useTimeSelect";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function AddMeeting() {
	const [inputValueFrom, setInputValueFrom] = useState("");
	const [inputValueTo, setInputValueTo] = useState("");
	const [inputValueLocation, setInputValueLocation] = useState("");
	const [inputValueAgenda, setInputValueAgenda] = useState("");
	const [currentMeetingId, setCurrentMeetingId] = useState("");
	const [inputDate, setInputDate] = React.useState(null);
	let array = [];
	let [menuItems, setMenuItems] = useState([{Name: "Eric"}]);
	const {UpdateTimeSelect} = useUpdateTimeSelect();

	const handelButton = async () =>
	{ 
		getUserList();//ska inte ligga här sen 

		const res = await UpdateTimeSelect(inputValueLocation, inputValueAgenda, inputValueFrom, inputValueTo, inputDate); 
		setCurrentMeetingId(res.json());
		console.log(currentMeetingId);
		console.log(inputDate);
	};
	const getUserList = () =>
	{
		console.log("use was reached");
		fetch("/api/userList",{ method: "POST"})
			.then((response) => response.json())
			.then((data) => {
				setMenuItems(data);
				console.log(menuItems);
			});
	};
	const addParticipants = (id) =>
	{
		if(array.indexOf(id) === -1)
		{
			array.push(id);
		}
		else{
			array = array.filter(item => item !== id);
		}
		console.log(array);
	};
	return (
		<>
			<Stack direction={"row"}>
				<List className="coWorkerList">

					{menuItems.map((item) => (
						<ListItemButton className="coWorkerInfo" key={item.Name}>
							<Grid container xs={12}>
								<Grid xs={8}>{item.Name}</Grid>
								<Grid xs={4}>
									<Checkbox value={item.UserId} sx={{
										color: "Black",
										"&.Mui-checked": {
											color: "darkorange",
										},
									}} onChange={(e) => addParticipants(e.target.value)}></Checkbox>
								</Grid>
							</Grid>
						</ListItemButton>
					))}
                    
				</List>
				<Grid>
					<Stack>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DatePicker className="date" value={inputDate} onChange={(newValue) => setInputDate(newValue)}/>
						</LocalizationProvider>
						<TextField className="input" label="From:" value={inputValueFrom} onChange={(e) => setInputValueFrom(e.target.value)}/>
						<TextField className="input" label="To:"   value={inputValueTo} onChange={(e) => setInputValueTo(e.target.value)}/>
						<TextField className="input" label="Location" value={inputValueLocation} onChange={(e) => setInputValueLocation(e.target.value)}/>
						<TextField className="input" label="Meeting name" value={inputValueAgenda} onChange={(e) => setInputValueAgenda(e.target.value)}/>
						<Button id="AddButton" className="inputButton" variant="contained" onClick={handelButton}>
                        Add to MeetingScheduler
						</Button>
					</Stack>
				</Grid>
			</Stack>
		</>
	);
}
export class TimeSelect extends Component {
	render(){    
		return(
			<Grid>
				<Grid>
					<AddMeeting/>
				</Grid>
			</Grid>
		);
	}
}


export default TimeSelect;