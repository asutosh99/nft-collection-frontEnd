export default function handler(req, res) {
    // get the tokenId from the query params
    const tokenId = req.query.tokenId;

    const image_url =
    "https://raw.githubusercontent.com/asutosh99/nft-collection-frontEnd/main/public/cryptodevs/";
    
    res.status(200).json({
      name: "Crypto Dev #" + tokenId,
      description: "Crypto Dev is a collection of developers in crypto",
      image: image_url + tokenId + ".svg",
    });
  }
  