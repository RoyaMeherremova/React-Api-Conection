import React, { useState } from 'react'
import { Button, Table } from 'reactstrap';
import AddEmployee from '../components/admin/employee/AddEmployee';

function Employees() {
    const [open, setOpen] = useState(false);


    return (
        <div>
            <div className='container my-3'>
                <AddEmployee open={open} />
                <h1 className='text-center my-3'>Employees</h1>
                <Button onClick={() => setOpen(true)} color='success'>Create</Button>
                <Table className='mt-3'
                >
                    <thead>
                        <tr>
                            <th>
                                FullName
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Address
                            </th>
                            <th>
                                Settings
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>
                                Mark
                            </td>
                            <td>
                                Otto
                            </td>
                            <td>
                                @mdo
                            </td>
                            <td className='d-flex gap-2'>
                                <Button color='info'>Detail</Button>
                                <Button color='primary'>Edit</Button>
                                <Button color='danger'>Delete</Button>

                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>

        </div>
    )
}


export default Employees
