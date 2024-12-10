import axios from "axios" ; 
import ImageBackground from '../assets/images/image-background.png';

const getHippos = async (query="hippo", ) => {
try {
const searchUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search`;
const response = await axios.get(searchUrl, {
  params: {
    q: query, 
    hasImages: true,
  }, 
 })
  return   searchResponse.data.objectIDs ; 
} catch (e) {
  console.error(`ERROR - Query Request: ${query}...`, e.message, e.code);
  return null;
};
}

if (!hippoIDs || hippoIDs.length === 0) {
  console.log('No item found in the collection with the tag "hippo" ');
  return;
}

// Étape 2 : Obtenir les détails pour chaque œuvre
const objectDetailsUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects`;
const artworks = [];

for (const id of objectIDs.slice(0, 10)) { // Limite à 10 résultats pour éviter trop de requêtes
  try {
    const detailsResponse = await axios.get(`${objectDetailsUrl}/${id}`);
    const data = detailsResponse.data;
    // Récupérer les champs importants
    const artwork = {
      objectID: data.objectID,
      artist: data.artistDisplayName || 'Auteur inconnu',
      primaryImage: data.primaryImage || ImageBackground ,
      primaryImageSmall : data.primaryImageSmall || ImageBackground , 
      medium: data.medium,
      /*tags: data.tags ? data.tags.map(tag => tag.term) : ['Aucun tag disponible'],*/
    };
    artworks.push(artwork);
  } catch (error) {
    console.error(`Erreur while getting data from object Id n° ${id}:`, error.message); // pb si un est vide va faire bugger le reste ? 
  }try { 
  console.log('Résultats pour les œuvres avec le tag "animal" :');
artworks.forEach((artwork, index) => {
  console.log(`\n${index + 1}.`);
  console.log(`ID de l'œuvre : ${artwork.objectID}`);
  console.log(`Auteur : ${artwork.artist}`);
});
} catch (error) {
console.error('Erreur lors de la requête principale :', error.message);
}
};

// Exécuter le script
getAnimalArtworks();

export {getHippos} ; 
