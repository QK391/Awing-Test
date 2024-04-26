import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import TextField from '@mui/material/TextField';
import TabPanel from '@mui/lab/TabPanel';
import AddIcon from '@mui/icons-material/Add';
import CssBaseline from '@mui/material/CssBaseline';
//import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Fab from '@mui/material/Fab';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import AdvertisementList from './AdvertisementList';

const ariaLabel = { 'aria-label': 'description' };
export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const messages = [
    {
      id: 1,
      primary: 'Chiến dịch con 1',
      secondary: "0",

    },
    {
      id: 2,
      primary: 'Chiến dịch con 2',
      secondary: "0",

    }
  ];

  const [valueOfNameCompain, setValueOfName] = React.useState("");
  const handleChangeNameCompain = e => {
    return setValueOfName(e.target.value);
  };

  const [valueOfNameSubCompain, setValueOfSubName] = React.useState("");
  const handleChangeNameSubCompain = e => {
    return setValueOfSubName(e.target.value);
  };

  const [valueQuantityOfSubCompain, setValueQuantityOfSubName] = React.useState("");
  const handleChangeQuantitySubCompain = e => {
    return setValueQuantityOfSubName(e.target.value);
  };

  // check null for ten quan cao ...

  const [checked, setChecked] = React.useState([true, false]);
  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  // const [List, setNameSubCompainInList] = React.useState("");

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const clickSubmit = (ev) => {
    if (valueOfNameCompain === "" || valueOfNameSubCompain === "") { //|| valueQuantityOfSubCompain === ""
      alert("Vui lòng điền đúng và đầy đủ thông tin");
    } else {
      alert("Thông tin được thêm thành công");
    }
  }


  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={6}>
          <FormControlLabel
            control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          />
          <Input defaultValue="Quảng cáo 1" inputProps={ariaLabel} />
        </Grid>

        <Grid item xs={6}>
          <TextField id="outlined-number"
            label="Số lượng *"
            type="number"
            value={valueQuantityOfSubCompain}
            onChange={handleChangeQuantitySubCompain}
          />
        </Grid>

        <Grid item xs={4}>
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="THÔNG TIN" value="1" />
            <Tab label="CHIẾN DỊCH CON" value="2" />
          </TabList>
        </Box>

        <Stack spacing={2} direction="row" sx={{ paddingTop: '40px', paddingLeft: '20px' }}>
          <Button variant="contained" className='submit' onClick={clickSubmit}>SUBMIT</Button>
        </Stack>

        <TabPanel value="1">
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <TextField id="standard-basic" margin='100' type='text' label="Tên chiến dịch *" variant="standard" value={valueOfNameCompain} onChange={handleChangeNameCompain}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField id="standard-basic" label="Mô tả" variant="standard" />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value="2">
          <React.Fragment>
            <CssBaseline />
            <Paper square sx={{ pb: '50px' }}>
              <Fab size="small" aria-label="add">
                <AddIcon />
              </Fab>

              <List sx={{ mb: 2 }}>
                {messages.map(({ id, primary, secondary, person }) => (
                  <React.Fragment key={id}>
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar alt="Profile Picture" src={person} />
                      </ListItemAvatar>
                      <ListItemText primary={primary} secondary={secondary} />
                    </ListItemButton>
                  </React.Fragment>
                ))}
              </List>
              <Grid container spacing={2} columns={16} sx={{ paddingTop: '40px', paddingLeft: '20px' }}>
                <Grid item xs={8}>
                  <TextField id="standard-basic" label="Tên chiến dịch con *" variant="standard" value={valueOfNameSubCompain} onChange={handleChangeNameSubCompain}
                  />
                </Grid>
                <Grid item xs={8}>
                  <FormControlLabel control={<Checkbox defaultChecked />} color="success" label="Đang hoạt động" />
                </Grid>
              </Grid>
            </Paper>
            <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
            </AppBar>
            <div className="App">
              <AdvertisementList />
            </div>
          </React.Fragment>
        </TabPanel>
      </TabContext>
    </Box>
  );
}