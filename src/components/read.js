
import React from 'react';
import { Table} from 'semantic-ui-react';


export default function Read() {


return (
    <><div>
        <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>TrainName</Table.HeaderCell>
                    <Table.HeaderCell>TrainNumber</Table.HeaderCell>
                    <Table.HeaderCell>DepatureTime</Table.HeaderCell>
                    <Table.HeaderCell>SleeperSeatsAvailabe</Table.HeaderCell>
                    <Table.HeaderCell>ACSeatsAvailable</Table.HeaderCell>
                    <Table.HeaderCell>SleeperPrice</Table.HeaderCell>
                    <Table.HeaderCell>ACPrice</Table.HeaderCell>
                    <Table.HeaderCell>DelayedBy</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                
                    
                        <Table.Row>
                            <Table.Cell>Chennai Exp</Table.Cell>
                            <Table.Cell>2344</Table.Cell>
                            <Table.Cell>21.35.0</Table.Cell>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>2</Table.Cell>
                            <Table.Cell>5</Table.Cell>
                            <Table.Cell>15</Table.Cell>
                        </Table.Row>
                    
            </Table.Body>
        </Table>

    </div>
  </>
    
)
} 