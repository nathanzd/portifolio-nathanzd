/* eslint-disable jsx-a11y/anchor-is-valid */
"use client"
import React, { useEffect, useRef, useState } from 'react';
import useInterval from '@use-it/interval';

// Constants
const VALID_CHARS = `01`;// Representa os caracteres validos
const STREAM_MUTATION_ODDS = 0.02;

const MIN_STREAM_SIZE = 20; // Tamanho minimo da string
const MAX_STREAM_SIZE = 40; // Tamanho maximo da string

const MIN_INTERVAL_DELAY = 50;
const MAX_INTERVAL_DELAY = 80;

const MIN_DELAY_BETWEEN_STREAMS = 0;
const MAX_DELAY_BETWEEN_STREAMS = 1000;

//Retorna um numero aleatorio dentro do raio especificado
const getRandInRange = (min, max) =>
	// A função floor Retorna o maior número inteiro menor ou igual ao seu argumento numérico
	// a função random gera um numero pseudoaleatorio
	Math.floor(Math.random() * (max - min)) + min;

const getRandChar = () =>
	// chartAT retorna o caractere da string de indicie indicado
	VALID_CHARS.charAt(Math.floor(Math.random() * VALID_CHARS.length));

const getRandStream = () =>
	new Array(getRandInRange(MIN_STREAM_SIZE, MAX_STREAM_SIZE))
		.fill()
		.map(_ => getRandChar());

const getMutatedStream = stream => {
	const newStream = [];
	for (let i = 1; i < stream.length; i++) {
		if (Math.random() < STREAM_MUTATION_ODDS) {
			newStream.push(getRandChar());
		} else {
			newStream.push(stream[i]);
		}
	}
	newStream.push(getRandChar());
	return newStream;
};

const RainStream = props => {
	const [stream, setStream] = useState(getRandStream());
	const [topPadding, setTopPadding] = useState(stream.length * -50);
	const [intervalDelay, setIntervalDelay] = useState(null);

	// Initialize intervalDelay
	useEffect(() => {
		setTimeout(() => {
			setIntervalDelay(getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY));
		}, getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS));
	}, []);

	useInterval(() => {
		if (!props.height) return;

		if (!intervalDelay) return;

		// If stream is off the screen, reset it after timeout
		if (topPadding > props.height) {
			setStream([]);
			const newStream = getRandStream();
			setStream(newStream);
			setTopPadding(newStream.length * -44);
			setIntervalDelay(null);
			setTimeout(
				() =>
					setIntervalDelay(
						getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY),
					),
				getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS),
			);
		} else {
			setTopPadding(topPadding + 44);
		}
		// setStream(stream => [...stream.slice(1, stream.length), getRandChar()]);
		setStream(getMutatedStream);
	}, intervalDelay);

	return (
		<div
			style={{
				
				color: '#707070',
				fontFamily:'pixelOperator',
				writingMode: 'vertical-rl',
				textOrientation: 'upright',
				userSelect: 'none',
				whiteSpace: 'nowrap',
				marginTop: topPadding,
				
				
				fontSize: 24,
			}}>
			{stream.map((char, index) => (
				<a key={index}
					style={{
						marginTop: -3,
						// Reduce opacity for last chars
						opacity: index < 6 ? 0.1 + index * 0.15 : 1,
						color: index === stream.length - 1 ? '#fff' : undefined,
						textShadow:
							index === stream.length - 1
								? '0px 0px 20px rgba(255, 255, 255, 1)'
								: undefined,
					}}>
					{char}
				</a>
			))}
		</div>
	);
};

const MatrixRain = props => {
	const containerRef = useRef(null);
	const [containerSize, setContainerSize] = useState(null); // ?{width, height}

	useEffect(() => {
		const boundingClientRect = containerRef.current.getBoundingClientRect();
		setContainerSize({
			width: boundingClientRect.width,
			height: boundingClientRect.height,
		});
	}, []);

	const streamCount = containerSize ? Math.floor(containerSize.width / 26) : 0;

	return (
		<div
			style={{
				background: '#101010',
				position: 'fixed',
				zIndex:-50,
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				overflow: 'ignore',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
			}}
			ref={containerRef}>
			{new Array(streamCount).fill().map(_ => (
				<RainStream height={containerSize?.height} />
			))}
		</div>
	);
};

export default MatrixRain;