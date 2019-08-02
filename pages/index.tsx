import React, { MouseEvent } from 'react';
import { Container, Typography, Paper, Button } from '@material-ui/core';
import { v4 } from 'uuid';

import './styles.scss';

export default class extends React.Component<{}, { uuid: string }> {
	constructor(props) {
		super(props);

		this.state = {
			uuid: ''
		};

		this.generateNewUUID = this.generateNewUUID.bind(this);
	}

	componentDidMount() {
		this.generateNewUUID();
	}

	generateNewUUID(e?: MouseEvent<HTMLButtonElement>) {
		e !== undefined && e.preventDefault();

		this.setState({ uuid: v4() });
	}

	render() {
		const { uuid } = this.state;

		return (
			<Container maxWidth="xl" className="container">
				<Typography component="h3" variant="h3" className="title">
					UUID Generator
				</Typography>

				<Paper className="paper">
					<Typography component="h5" variant="h5">
						{uuid}
					</Typography>
				</Paper>

				<Button
					variant="outlined"
					className="genBtn"
					color="primary"
					onClick={this.generateNewUUID}
				>
					New UUID
				</Button>
			</Container>
		);
	}
}
