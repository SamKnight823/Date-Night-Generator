import ListGroup from 'react-bootstrap/ListGroup';

export default function Suggestions() {
  const alertClicked = () => {
    alert('You will now be redirected away from the Date Night Generator');
  };

  return (
    <ListGroup defaultActiveKey="#link1">
      <ListGroup.Item action href="https://escaperoom.com/">
        Find An Escape Room Near You
      </ListGroup.Item>
      <ListGroup.Item action href="https://www.fandango.com/">
        Find Movies Near You
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked} href="https://www.expedia.com/Activities">
        Find Activites Near You
      </ListGroup.Item>
    </ListGroup>
  );
}