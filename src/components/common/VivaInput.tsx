import { useState, ChangeEvent, KeyboardEventHandler } from 'react';
import { VivaInputgrid, VivaTextField, VivaContainedTextField } from './CommonVivaComponents';
import Grid, { GridSize } from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { SxProps } from '@mui/system';
import { vivaTheme } from '../../App';

export interface VivaInputProps {
    id?: string;
    value: string | Array<string>;
    label?: string;
    inputLabel?: string;
    type: 'text' | 'password' | 'multiline' | 'checkboxes';
    disabled?: boolean;
    placeholder?: string;
    labelGridSm?: GridSize;
    inputGridSm?: GridSize;
    textInputType?: 'contained' | 'standard';
    labelGridSx?: SxProps<typeof vivaTheme>;
    inputGridSx?: SxProps<typeof vivaTheme>;
    checkboxItems?: Array<{ label: string, value: string }>;
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
    onCheckboxClick?: (item: string) => void;
}

const VivaInput = (props: VivaInputProps) => {
    const { id, value, label, inputLabel, type, placeholder, disabled, labelGridSm, inputGridSm, textInputType, labelGridSx, inputGridSx, onChange, onKeyDown } = props;
    const [passVisible, setPassVisible] = useState(false);
    const VivaField = textInputType === 'standard' ? VivaTextField : VivaContainedTextField
    return (
        <VivaInputgrid container>
            {label && !inputLabel &&
                <Grid item xs={12} sm={labelGridSm} sx={labelGridSx}>{label}</Grid>
            }
            <Grid item xs={12} sm={inputGridSm} sx={inputGridSx}>
                {type === 'text' &&
                    <VivaField
                        id={id}
                        fullWidth
                        type={type}
                        value={value}
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        label={inputLabel}
                        placeholder={placeholder}
                    />
                }
                {type === 'multiline' &&
                    <VivaField
                        id={id}
                        fullWidth
                        multiline
                        minRows={5}
                        type="text"
                        value={value}
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        label={inputLabel}
                        placeholder={placeholder}
                        sx={{ height: 'unset' }}
                    />
                }
                {type === 'password' &&
                    <VivaField
                        id={id}
                        fullWidth
                        type={!passVisible ? type : 'text'}
                        value={value}
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        label={inputLabel}
                        placeholder={placeholder}
                        autoComplete="new-password"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment className={disabled ? 'disabled-adornment' : ''} position="end">
                                        {passVisible ? 
                                            <VisibilityIcon onClick={() => setPassVisible(false)} />
                                        :
                                            <VisibilityOffIcon onClick={() => setPassVisible(true)} />
                                        }
                                    </InputAdornment>
                                )
                            }}
                    />
                }
            </Grid>
        </VivaInputgrid>
    )
}

export default VivaInput;