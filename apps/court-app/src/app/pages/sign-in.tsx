import {
  Button,
  FilledInput,
  FormControl,
  InputLabel,
  Paper,
  TextField,
} from '@material-ui/core';
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { useStyles } from './home.styled';
import clsx from 'clsx';
import styled, { css } from 'styled-components';
import { checkNickAvaibility, createUser } from '../api/userApi';
import keytrackSamples from '../assets/keytrack-samples.json';

const InputWrapper = styled.div`
  padding: 1em;
`;
const InputStyles = css`
  margin: 0.1em;
`;

const keyTracInputId = 'textArea01';
const hiddenKeyTrackInputId = `keytrac_${keyTracInputId}`;
const keyTracInputId2 = 'textArea02';
const hiddenKeyTrackInputId2 = `keytrac_${keyTracInputId2}`;

export const SignInPage: React.FC = () => {
  const [isNickValid, setIsNickValid] = useState(true);

  const nickRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const handleCheckNick = useCallback(async (event) => {
    const value = event.target.value;
    const response = await checkNickAvaibility(value);
    const isNickValid = !!response?.data?.isAvaiable;
    setIsNickValid(isNickValid);
  }, []);
  const handleOnBlureNick = handleCheckNick;
  const handleKeyPressNick = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        handleCheckNick(event);
      }
    },
    [handleCheckNick]
  );
  const classes = useStyles();
  useLayoutEffect(() => {
    (window as any).KeyTrac.configure({
      anytextFields: [`#${keyTracInputId}`,`#${keyTracInputId2}`],
    });
  });

  const handleOnClickRegister = useCallback(() => {
    const { value: hiddentext } = window.document.getElementById(
      hiddenKeyTrackInputId
    ) as HTMLInputElement;
    const { value: hiddentext2 } = window.document.getElementById(
      hiddenKeyTrackInputId2
    ) as HTMLInputElement;
    const nick = nickRef.current.value;
    const password = passwordRef.current.value;

    console.log('////start///');
    console.log(nick);
    console.log(password);
    console.log(hiddentext);
    console.log('////start///');
    createUser(nick, password, hiddentext, hiddentext2);
  }, []);

  return (
    <Paper className={classes.cities}>
      <InputWrapper>
        <FormControl variant="filled">
          <InputLabel htmlFor="city-input">Nick</InputLabel>
          <FilledInput
            id="city-input"
            type={'text'}
            onBlur={handleOnBlureNick}
            onKeyPress={handleKeyPressNick}
            inputRef={nickRef}
            // defaultValue={queryCityName}
          />
        </FormControl>
      </InputWrapper>
      <InputWrapper>
        <FormControl variant="filled">
          <InputLabel htmlFor="password-input">Password</InputLabel>
          <FilledInput
            id="password-input"
            type={'password'}
            inputRef={passwordRef}
            // onBlur={handleBlur}
            // onKeyPress={handleKeyPress}
            // defaultValue={queryCityName}
          />
        </FormControl>
      </InputWrapper>
      <InputWrapper>
        {keytrackSamples.PanTadeusz}
        <TextField name="textArea1" id={keyTracInputId} />
      </InputWrapper>
      <InputWrapper>
        {keytrackSamples.HymnDabrowskiego}
        <TextField name="textArea2" id={keyTracInputId2} />
      </InputWrapper>
      <Button onClick={handleOnClickRegister}>Register</Button>
    </Paper>
  );
};