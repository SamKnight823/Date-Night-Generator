import Card from 'react-bootstrap/Card';

export default function CarouselItem1() {
  return (
    <Card >
      <Card.Img variant="top" src="https://static-prod.adweek.com/wp-content/uploads/2020/10/virtual-escape-room-PAGE-2020.jpg" />
      <Card.Header>Adventure Date</Card.Header>
      <Card.Body>
        <Card.Title>Escape Rooms</Card.Title>
        <Card.Text>
        Escape rooms are a type of interactive entertainment where a group of players are locked in a room and must work together to solve puzzles and find clues in order to escape within a set time limit. Escape rooms have become increasingly popular in recent years, with over 30,000 escape rooms operating worldwide.

Escape rooms typically have a specific theme, such as a haunted house, a prison, or a spy mission. The room is decorated to match the theme, and the puzzles and clues are designed to fit the theme as well. Escape rooms can be played by groups of any size, but most rooms are designed for groups of 2-6 people.

The goal of an escape room is to escape from the room within the time limit. To do this, players must work together to find clues, solve puzzles, and complete tasks. The puzzles and clues can be anything from finding hidden objects to decoding messages. The difficulty of the puzzles and clues varies depending on the room.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

