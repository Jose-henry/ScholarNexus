
"use client"

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  line-height: 1.5;
  min-height: 100vh;
  background: #f3f3f3;
  flex-direction: column;
  margin: 0;
`;

const Title = styled.h1`
  color: green;
  font-size: 24px;
  margin-bottom: 20px;
`;

const TimerCircle = styled.div`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: crimson;
  border: 8px solid #3498db;
`;

const TimerText = styled.div`
  font-size: 25px;
  color: crimson;
`;

const ControlButtons = styled.div`
  margin-top: 75px;
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const Pomodoro = () => {
  // Your JavaScript code here
};

export default Pomodoro;

