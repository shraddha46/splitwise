import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, InputLabel, TextField, InputAdornment, Input, FormControl, Typography, Chip } from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import ExpenseNoteImg from '../../Images/expense-note.png';

const AddExpenseDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.secondary.logged,
  color: 'white',
  padding: theme.spacing(2),
  margin: 0,
  position: 'relative',
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  color: 'white',
}));

const FieldContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  width: '100%',
  padding: '12px 0 12px 0'
}));

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  whiteSpace: 'nowrap',
  flexShrink: 0,
}));

const CustomChip = styled(Chip)(({ theme }) => ({
  color: theme.palette.secondary.logged,
  border: `2px dashed ${theme.palette.secondary.logged}`,
  fontWeight: 500,
  margin: '0 4px 0 4px',
  padding: '8px 4px',
  cursor: 'pointer'
}));

const filter = createFilterOptions();

const AddExpense = ({ open }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState([]);
  const [options] = useState([{ title: 'aa', value: 'a' }, { title: 'bb', value: 'b' }]);


  useEffect(() => {
    if (inputValue) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  }, [inputValue]);

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog open={open} BackdropProps={{
      style: { backgroundColor: 'rgba(20, 20, 8, 0.8)' }
    }}>
      <AddExpenseDialogTitle sx={{ p: 1, pl: 2 }}>
        Add an expense
        <CloseButton aria-label="close">
          <CloseIcon />
        </CloseButton>
      </AddExpenseDialogTitle>
      <DialogContent>
        <FieldContainer>
          <CustomLabel htmlFor="text-field">With <b>you</b> and :</CustomLabel>
          <Autocomplete
            multiple
            fullWidth
            value={value}
            onInputChange={handleInputChange}
            onChange={handleChange}
            open={openMenu}
            onOpen={() => setOpenMenu(true)}
            onClose={() => setOpenMenu(false)}
            options={options}
            getOptionLabel={(option) => typeof option === 'string' ? option : option.title}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);
              const { inputValue } = params;
              const isExisting = options.some(option => inputValue === option.title);
              if (inputValue !== '' && !isExisting) {
                filtered.push({
                  inputValue,
                  title: `Add "${inputValue}"`,
                });
              }
              return filtered;
            }}
            renderOption={(props, option) => (
              <li {...props} key={option.title}>
                {option.title}
              </li>
            )}
            freeSolo
            renderInput={(params) => (
              <TextField {...params} variant='standard' />
            )}
          />
        </FieldContainer>
        <div>
        <FieldContainer style={{paddingTop: '0px', marginTop: '8px'}}>
            <img src={ExpenseNoteImg} alt=""/>
            <div>
            <TextField
              required
              fullWidth
              id="description"
              label="Enter a description"
              name="description"
              autoComplete="description"
              variant='standard'
              size="small"
            // value={signupData.username}
            // onChange={(e) => setSignUpData({ ...signupData, username: e.target.value })}
            // error={Boolean(errors.username)}
            // helperText={errors.username}
            />
            <FormControl variant="standard" fullWidth style={{marginTop: '14px'}}>
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
          type="number"
          InputProps={{
            inputProps: {
              min: 0,
              step: 1
            }
          }}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
            </div>
        </FieldContainer>
        <Typography component="p" style={{marginTop: '16px'}}>
                    Paid by <CustomChip label="you" size="small" /> and split <CustomChip label="equally" size="small" />.
                </Typography>
                <Typography component="p" style={{marginTop: '8px', fontSize: '14px'}}>
                    ($1000.00/person)
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '18px'}} >
                <DateTimePicker
                  label="Data & Time"
                  defaultValue={new Date()}
                  slotProps={{
                  textField: {
                    variant: 'standard',
                  }
                }}
                  viewRenderers={{
                    hours: renderTimeViewClock,
                    minutes: renderTimeViewClock,
                    seconds: renderTimeViewClock,
                  }}
                />
                </div>
                </LocalizationProvider>
                
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="primary">
          Close
        </Button>
        <Button color="primary">
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddExpense;