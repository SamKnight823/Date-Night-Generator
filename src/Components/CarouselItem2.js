import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CarouselItem2() {
  return (
    <Card>
      <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/005/502/524/original/cinema-background-concept-movie-theater-object-on-red-curtain-background-and-movie-time-with-electric-bulbs-frame-illustration-free-vector.jpg" />
      <Card.Header>Entertainment Date</Card.Header>
      <Card.Body>
        <Card.Title>Movie Night</Card.Title>
        <Card.Text>
        If you're looking for a fun and entertaining way to spend an evening, going to the movie theater is a great option. 
        There are many reasons why going to the movies is fun, and it's a great way to relax and escape from the everyday world.
       <br></br> Large screen and sound system: Movie theaters have large screens and sound systems that provide an immersive experience that you can't get at home. This is especially true for action movies, comedies, and musicals.
       <br></br>No distractions: When you watch a movie at home, there are always distractions. You might have to get up to answer the phone, or your kids might come in and ask you for something. At the movie theater, you can relax and focus on the movie without any distractions.
       <br></br>Social experience: Going to the movies is a great way to spend time with friends and family. You can share your reactions to the movie and talk about it afterwards.
       <br></br>New releases: You can't watch new releases at home until they come out on DVD or streaming services. Going to the movies is the only way to see the latest and greatest movies as soon as they're released.
       <br></br>Special events: Movie theaters often host special events, such as midnight screenings, sing-alongs, and Q&As with the filmmakers. These events can be a great way to experience a movie in a unique way.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

