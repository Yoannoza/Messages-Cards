import React, { useState } from "react";
import { Card } from "./components/Card";
import { Input } from "./components/Input";

const default_card = [
  {
    author: "Yoann",
    content: "Amazing",
    yes: 14,
    no: 34,
  },
  // ... other default cards
];

function App() {
  const [card_list, setCard] = useState(default_card);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const add_card = (e) => {
    e.preventDefault();

    const newCard = {
        author: author,
        content: content,
        yes: 0,
        no: 0,
    };

    setCard([...card_list, newCard]);

    // fetch('http://localhost:5173/src/php/add_card.php', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(newCard),
    //   })
    //   .then(response => {
    //     if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
    //     return response.text(); // lire la réponse comme texte
    //   })
    //   .then(data => {
    //       console.log('Card added:', data);
    //       // Si le serveur renvoie des balises PHP, vous pouvez les traiter ici
    //       // par exemple, en les retirant avec une expression régulière
          
    //       const jsonData = JSON.parse(String(data).replace(/<\?php/g, ''));
    //       console.log('Card MODEIFIED:', jsonData);
    //       setCard([...card_list, jsonData]);
    //   })
    //   .catch(error => {
    //       console.error('Error adding card:', error);
    //   });
};


  const create_card = (list_card) => {
    return list_card.map((card, index) => (
      <Card
        key={index} // Provide a unique key for each Card component
        author={card.author}
        content={card.content}
        yes={card.yes}
        no={card.no}
        like={() => setCard([...card_list.slice(0, index), { ...card, yes: card.yes + 1 }, ...card_list.slice(index + 1)])}
        delike={() => setCard([...card_list.slice(0, index), { ...card, no: card.no + 1 }, ...card_list.slice(index + 1)])}
      />
    ));
  };

  const all_card = create_card(card_list);

  return (
    <div>
      <div className="grid">{all_card}</div>
      <Input submit={add_card} author_method={setAuthor} content_method={setContent} />
    </div>
  );
}

export default App;
