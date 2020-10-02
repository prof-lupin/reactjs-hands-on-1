import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";

class Details extends React.Component {
  //   constructor(props) {
  //     super();

  //     this.state = {
  //       loading: true,
  //     };
  //   }

  state = { loading: true };

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        species: animal.type,
        location: `{${animal.contact.address.city}, ${animal.contact.address.state}}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }
    const { species, name, location, description, breed, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${species} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
