import * as React from 'react';
import { Table, Td, Th } from '../components/Table';

export const URL = '/tournaments';

export class Tournaments extends React.Component<{}, {}> {
    render() {
        return (
            <main>
                <h1>Touraments</h1>
                <Table>
                    <caption>High Profile Tournaments</caption>
                    <thead>
                        <tr>
                            <Th>Name</Th>
                            <Th>Start Date</Th>
                            <Th>Round</Th>
                            <Th>Next Round Date</Th>
                            <Th>Players</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Th>
                                <a href="">
                                    Billy's Battle
                                </a>
                            </Th>
                            <Td>
                                <time>2018-12-15</time>
                            </Td>
                            <Td>3 of 5</Td>
                            <Td><time>2018-12-25</time></Td>
                            <Td>32</Td>
                        </tr>
                        <tr>
                            <Th>
                                <a href="">quinn197 Smackdown</a>
                            </Th>
                            <Td>
                                <time>2018-12-16</time>
                            </Td>
                            <Td>2 of 4</Td>
                            <Td><time>2018-12-26</time></Td>
                            <Td>16</Td>
                        </tr>
                        <tr>
                            <Th>
                                <a href="">SlowBro Smash</a>
                            </Th>
                            <Td>
                                <time>2018-12-17</time>
                            </Td>
                            <Td>3 of 6</Td>
                            <Td><time>2018-12-28</time></Td>
                            <Td>64</Td>
                        </tr>
                        <tr>
                            <Th>
                                <a href="">The Village</a>
                            </Th>
                            <Td>
                                <time>2018-12-22</time>
                            </Td>
                            <Td>1 of 6</Td>
                            <Td><time>2018-12-29</time></Td>
                            <Td>128</Td>
                        </tr>
                    </tbody>
                </Table>
            </main>
        );
    }
}

export default Tournaments;
