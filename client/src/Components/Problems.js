import axios from 'axios';
import React, { useEffect, useState } from "react";
// import { makeStyles } from '@material-ui/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
// const useStyles = makeStyles(theme => ({
//     root: {
//         display: 'flex',
//     },
//     formControl: {
//         margin: theme.spacing.unit * 3,
//     },
// }));



// functional component
const Problems = () => {
    // const [problems, setProblems] = useState([]);
    const [problemList, setProblemList] = useState([]);
    // const classes = useStyles();
    // useEffect(() => {

    // }, []);

    const [state, setState] = React.useState({
        implementation: false,
        math: false,
        greedy: false,
        dp: false,
        graphs: false,
        sortings: false,
        trees: false,
        strings: false,
        combinatorics: false,

    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const { implementation, math, greedy, dp, graphs, sorting, trees, strings, combinatorics } = state;

    const onClickHandler = () => {
        console.log("hello");

        //generate a query string based on variable values
        let queryString = "";
        if (implementation) {
            queryString += "implementation;";
        }
        if (math) {
            queryString += "math;";
        }
        if (greedy) {
            queryString += "greedy;";
        }
        if (dp) {
            queryString += "dp;";
        }
        if (graphs) {
            queryString += "graphs;";
        }
        if (sorting) {
            queryString += "sorting;";
        }
        if (trees) {
            queryString += "trees;";
        }
        if (strings) {
            queryString += "strings;";
        }
        if (combinatorics) {
            queryString += "combinatorics;";
        }

        console.log(queryString);

        axios.get('https://codeforces.com/api/problemset.problems?tags=' + queryString)
            .then(problemData => {
                console.log(problemData);
                const problemList = problemData.data.result.problems;
                setProblemList(problemList);
                console.log({ problemList });
            })

    }


    return (
        <div style={{}}>
            <div>
                <FormControl component="fieldset" style={{}}>
                    <FormLabel component="legend">Problem Tags</FormLabel>
                    <FormGroup>
                        <div style={{ display: "flex" }}>
                            <FormControlLabel
                                control={<Checkbox checked={implementation} onChange={handleChange('implementation')} value="implementation" />}
                                label="Implementation"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={math} onChange={handleChange('math')} value="math" />}
                                label="Math"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={greedy} onChange={handleChange('greedy')} value="greedy" />
                                }
                                label="Greedy"
                            />
                        </div>
                        <div style={{ display: "flex" }}>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={dp} onChange={handleChange('dp')} value="dp" />
                                }
                                label="DP"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={graphs} onChange={handleChange('graphs')} value="graphs" />
                                }
                                label="Graphs"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={sorting} onChange={handleChange('sorting')} value="sorting" />
                                }
                                label="Sorting"
                            />
                        </div>
                        <div style={{ display: "flex" }}>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={trees} onChange={handleChange('trees')} value="trees" />
                                }
                                label="Trees"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={strings} onChange={handleChange('strings')} value="strings" />
                                }
                                label="Strings"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={combinatorics} onChange={handleChange('combinatorics')} value="combinatorics" />
                                }
                                label="Combinatorics"
                            />
                        </div>
                    </FormGroup>
                    <FormHelperText>Be careful</FormHelperText>

                </FormControl>
                {/* {problemList.map(problem => (
                <div>{problem.name}</div>
            ))} */}
            </div>
            <div>
                <Button variant="contained" onClick={onClickHandler}>Lezgoo</Button>
            </div>




        </div>
    );
}

export default Problems;