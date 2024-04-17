import {Card, CardBody, CardText} from "react-bootstrap";

function UserBalance({name, amount}) {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>Имя: {name}</Card.Title>
                <Card.Text>
                    Баланс: {amount}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default UserBalance;
