import logo from './logo.svg';
import './App.css';
import TransactionCard from "./components/TransactionCard";
import {Button, Card, CardGroup, Dropdown, Form, ListGroup, Stack} from "react-bootstrap";
import React from "react";
import UserBalance from "./components/UserBalance";

function App() {

    const [balances, setBalances] = React.useState([
        {
            name: 'Менеджер',
            amount: 0
        },

        {
            name: 'Механик',
            amount: 0
        },

        {
            name: 'Клиент',
            amount: 0
        }
    ])

    const [transactions, setTransactions] = React.useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.formUser)
        const amount = event.target.formAmount.value;
        const userName = event.target.formUserName.value;
        const comment = event.target.formComment.value;

        setTransactions([...transactions, {
            amount,
            userName,
            comment
        }])

        const newBalances = [...balances];
        newBalances.find(b => b.name === userName)
            .amount += +amount
        setBalances(newBalances)
    }

    return (
        <>
            <h3 className='m-2'>Пользователи</h3>
            <Stack direction="horizontal">
                {
                    balances.map(d => <UserBalance name={d.name} amount={d.amount}></UserBalance>)
                }
            </Stack>

            <h3 className='m-2'>Новая транзакция</h3>

            <Form className='m-3' onSubmit={handleSubmit}>


                <Form.Group className="m-3" controlId="formAmount">
                    <Form.Label>Кол-во денег</Form.Label>
                    <Form.Control type="number" name='formAmount' placeholder="Enter amount"/>
                </Form.Group>

                <Form.Group className="m-3" controlId="formComment">
                    <Form.Label>Комментарий</Form.Label>
                    <Form.Control type="text" name='formComment' placeholder="Comment"/>
                </Form.Group>

                <Form.Group className="m-3" controlId="formUserName">
                    <Form.Label>Выберите пользователя</Form.Label>
                    <Form.Select name='formUserName' aria-label="Default select example">
                        {
                            balances.map(b => (
                                <option value={b.name}>{b.name}</option>
                            ))
                        }
                    </Form.Select>
                </Form.Group>

                <Button className='m-2' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <h3 className='m-2'>Транзакции</h3>
            <Stack gap={3}>

                {
                    transactions.map(d => <TransactionCard amount={d.amount}
                                                           comment={d.comment}></TransactionCard>)
                }
            </Stack>

        </>)
}

export default App;
