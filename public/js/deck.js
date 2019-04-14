async function getDeck(){
  const response = await fetch("https://deckofcardsapi.com/api/deck/new/",{ method: "GET",  mode: "cors"});
  const json = await response.json();
  let deckid = json.deck_id;

  const response2 = await fetch("https://deckofcardsapi.com/api/deck/"+deckid+"/shuffle/");
  const json2 = await response2.json();

  const response3 = await fetch("https://deckofcardsapi.com/api/deck/"+deckid+"/draw/?count=52");
  const json3 = await response3.json();
  let cards = await json3.cards;
  return(cards);

}
