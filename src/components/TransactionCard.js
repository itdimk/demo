import {Card, CardBody, CardText} from "react-bootstrap";

function TransactionCard({amount, userName, comment}) {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{amount >0 ? '+' : ''} {amount} руб</Card.Title>
                <Card.Text>
                    {userName}
                    <br/>
                    Комментарий: {comment}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default TransactionCard;
