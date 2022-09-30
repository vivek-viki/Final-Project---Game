import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import { Dialog, DialogContent, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import PropTypes from 'prop-types';
import * as React from 'react';



class Scoreboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleCancelPop = () => {
        this.props.onClose(false);
    };
    render() {

        return (
            <Dialog
                fullWidth={true}
                maxWidth={'sm'}
                open={this.props.open}
                onClose={this.props.handleCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{backgroundColor:'gray'}}>
                   Score Board
                    <IconButton
                        style={{ float: "right" }}
                        edge="end"
                        color="inherit"
                        onClick={this.handleCancelPop}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent id="alert-dialog-title">
                            <TableContainer sx={{ marginTop: '0.5rem !important' }} component={Paper}>
                                <Table stickyHeader aria-label="collapsible table">
                                    <TableHead >
                                        <TableRow>
                                            <TableCell sx={{backgroundColor: '#1976d2'}}>User ID</TableCell>
                                            <TableCell sx={{backgroundColor: '#1976d2'}}>Score</TableCell>
                                            {/* <TableCell sx={{backgroundColor: '#1976d2'}}>Time</TableCell> */}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.props.score.map((row, index) => {
                                            return (
                                                <TableRow  >
                                                    <TableCell >{row.userid}</TableCell>
                                                    <TableCell >{row.score}</TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                </DialogContent>
            </Dialog>
        );
    }
}



export default Scoreboard;

