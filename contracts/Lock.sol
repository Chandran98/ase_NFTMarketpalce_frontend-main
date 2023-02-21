// pragma solidity ^0.8.9;

// import "@openzeppelin/contracts/utils/Counters.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "hardhat/console.sol";

// contract ASE is ERC721URIStorage {
//     using Counters for Counters.Counter;

//     Counters.Counter private _tokenid; // ID for every nft created
//     Counters.Counter private _itemssold; // Need to take the sold item count

//     mapping(uint256 => Marketitems) private idToMarketItem;
//     address payable owner; // owner address

//     uint256 listingprice = 0.0025 ether;

//     struct Marketitems {
//         // Info about marketitems
//         uint256 tokenid;
//         address payable seller;
//         address owner;
//         uint256 price;
//         bool issold;
//     }

//     // infomarketitem is used to send info to frontend
//     event infoMarketitem(
//         uint256 indexed tokenid,
//         address sender,
//         address owner,
//         uint256 price,
//         bool issold
//     );
//     modifier onlyOwner() {
//         require(msg.sender == owner, "Only owner can access it");
//         _;
//     }
//     modifier baseprice() {
//         require(msg.value == listingprice, "Price must be listing price");
//         _;
//     }

//     constructor() ERC721("NFTBOAT", "NFB") {
//         owner = payable(msg.sender);
//     }

//     function updatelisting(uint256 _listingprice) public payable onlyOwner {
//         listingprice = _listingprice;
//     }

//     function getListingPrice() public view returns (uint256) {
//         console.log(listingprice);
//         return listingprice;
//     }

//     function Createnft(
//         string calldata tokenuri,
//         uint256 price
//     ) public payable returns (uint256) {
//         _tokenid.increment();
//         uint newtokenid = _tokenid.current();

//         _mint(msg.sender, newtokenid);
//         _setTokenURI(newtokenid, tokenuri);
//         createmarketitem(newtokenid, price);

//         return newtokenid;
//     }

//     // createmarketitem function is used to create nft item by user and transfer the nft from seller to contract
//     function createmarketitem(
//         uint256 tokenid,
//         uint256 amount
//     ) private baseprice {
//         require(amount == 0, "Price required");

//         idToMarketItem[tokenid] = Marketitems(
//             tokenid,
//             payable(msg.sender),
//             payable(address(this)),
//             amount,
//             false
//         );

//         //     transfer the nft from seller to contract
//         _transfer(msg.sender, address(this), tokenid);

//         emit infoMarketitem(
//             tokenid,
//             payable(msg.sender),
//             payable(address(this)),
//             amount,
//             false
//         );
//     }

//     // resellnft is used to update the price in existing nft.
//     function resellnft(uint tokenid, uint price) public payable baseprice {
//         require(
//             idToMarketItem[tokenid].owner == msg.sender,
//             "You must be the owner of the nft"
//         );
//         idToMarketItem[tokenid].issold == false;
//         idToMarketItem[tokenid].price == price;
//         idToMarketItem[tokenid].seller == msg.sender;
//         idToMarketItem[tokenid].owner == address(this);

//         _itemssold.decrement();

//         _transfer(msg.sender, address(this), price);
//         emit infoMarketitem(
//             tokenid,
//             payable(msg.sender),
//             payable(address(this)),
//             price,
//             false
//         );
//     }

//     /// sale nft is used for product sales in market and to transfer the price to owner wallet.
//     function salenft(uint256 tokenid) public payable {
//         uint256 price = idToMarketItem[tokenid].price;
//         require(msg.value == price, "Please check the price amount");
//         idToMarketItem[tokenid].owner = payable(msg.sender);
//         idToMarketItem[tokenid].issold = true;
//         idToMarketItem[tokenid].owner = payable(address(0));

//         _itemssold.increment();

//         _transfer(address(this), msg.sender, tokenid);
//         payable(owner).transfer(listingprice);
//         payable(idToMarketItem[tokenid].seller).transfer(msg.value);
//     }

//     // Unsold nft listing

//     function unsoldnft() public view returns (Marketitems[] memory) {
//         uint256 itemcount = _tokenid.current();
//         uint256 unsoldnftcount = _tokenid.current() - _itemssold.current();
//         uint256 currentindex = 0;
//         Marketitems[] memory items = new Marketitems[](unsoldnftcount);
//         for (uint256 i = 0; i < itemcount; i++) {
//             if (idToMarketItem[i + 1].owner == address(this)) {
//                 uint256 currentid = i + 1;
//                 Marketitems storage currentitem = idToMarketItem[currentid];
//                 items[currentindex] = currentitem;
//                 currentindex += 1;
//             }
//         }
//         return items;
//     }

//     // Fetch our own NFT collection

//     function fetchnft() public view returns (Marketitems[] memory) {
//         uint256 totalcount = _tokenid.current();
//         uint256 itemcount = 0;
//         uint256 currentindex = 0;

//         for (uint256 i = 0; i < totalcount; i++) {
//             if (idToMarketItem[i + 1].owner == msg.sender) {
//                 itemcount = i + 1;
//             }
//         }
//         Marketitems[] memory item = new Marketitems[](itemcount);
//         for (uint i = 0; i < totalcount; i++) {
//             if (idToMarketItem[i + 1].owner == msg.sender) {
//                 uint256 currentId = i + 1;
//                 Marketitems storage currentitem = idToMarketItem[currentId];
//                 item[currentindex] = currentitem;
//                 currentindex += 1;
//             }
//         }
//         return item;
//     }

//     // List our NFT collection for sales

//     function saleout() public view returns (Marketitems[] memory) {
//         uint256 totalcount = _tokenid.current();
//         uint256 itemcount = 0;
//         uint256 currentindex = 0;

//         for (uint256 i = 0; i < totalcount; i++) {
//             if (idToMarketItem[i + 1].seller == msg.sender) {
//                 itemcount = i + 1;
//             }
//         }
//         Marketitems[] memory salesitem = new Marketitems[](itemcount);

//         for (uint i = 0; i < totalcount; i++) {
//             if (idToMarketItem[i + 1].seller == msg.sender) {
//                 uint256 currentId = i + 1;
//                 Marketitems storage currentitem = idToMarketItem[currentId];
//                 salesitem[currentindex] = currentitem;
//                 currentindex += 1;
//             }
//         }
//         return salesitem;
//     }
// }

// // SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract ASE is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    uint256 listingPrice = 0.025 ether;
    address payable owner;

    mapping(uint256 => MarketItem) private idToMarketItem;

    struct MarketItem {
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    event MarketItemCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "only owner of the marketplace can change the listing price"
        );
        _;
    }

    constructor() ERC721("Metaverse Tokens", "METT") {
        owner = payable(msg.sender);
    }

    /* Updates the listing price of the contract */
    function updateListingPrice(
        uint256 _listingPrice
    ) public payable onlyOwner {
        require(
            owner == msg.sender,
            "Only marketplace owner can update listing price."
        );
        listingPrice = _listingPrice;
    }

    /* Returns the listing price of the contract */
    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    /* Mints a token and lists it in the marketplace */
    function createToken(
        string memory tokenURI,
        uint256 price
    ) public payable returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        createMarketItem(newTokenId, price);
        return newTokenId;
    }

    function createMarketItem(uint256 tokenId, uint256 price) private {
        require(price > 0, "Price must be at least 1 wei");
        require(
            msg.value == listingPrice,
            "Price must be equal to listing price"
        );

        idToMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );

        _transfer(msg.sender, address(this), tokenId);
        emit MarketItemCreated(
            tokenId,
            msg.sender,
            address(this),
            price,
            false
        );
    }

    /* allows someone to resell a token they have purchased */
    function resellToken(uint256 tokenId, uint256 price) public payable {
        require(
            idToMarketItem[tokenId].owner == msg.sender,
            "Only item owner can perform this operation"
        );
        require(
            msg.value == listingPrice,
            "Price must be equal to listing price"
        );
        idToMarketItem[tokenId].sold = false;
        idToMarketItem[tokenId].price = price;
        idToMarketItem[tokenId].seller = payable(msg.sender);
        idToMarketItem[tokenId].owner = payable(address(this));
        _itemsSold.decrement();

        _transfer(msg.sender, address(this), tokenId);
    }

    /* Creates the sale of a marketplace item */
    /* Transfers ownership of the item, as well as funds between parties */
    function createMarketSale(uint256 tokenId) public payable {
        uint256 price = idToMarketItem[tokenId].price;
        require(
            msg.value == price,
            "Please submit the asking price in order to complete the purchase"
        );
        idToMarketItem[tokenId].owner = payable(msg.sender);
        idToMarketItem[tokenId].sold = true;
        idToMarketItem[tokenId].seller = payable(address(0));
        _itemsSold.increment();
        _transfer(address(this), msg.sender, tokenId);
        payable(owner).transfer(listingPrice);
        payable(idToMarketItem[tokenId].seller).transfer(msg.value);
    }

    /* Returns all unsold market items */
    function fetchMarketItems() public view returns (MarketItem[] memory) {
        uint256 itemCount = _tokenIds.current();
        uint256 unsoldItemCount = _tokenIds.current() - _itemsSold.current();
        uint256 currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unsoldItemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            if (idToMarketItem[i + 1].owner == address(this)) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    /* Returns only items that a user has purchased */
    function fetchMyNFTs() public view returns (MarketItem[] memory) {
        uint256 totalItemCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].owner == msg.sender) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    /* Returns only items a user has listed */
    function fetchItemsListed() public view returns (MarketItem[] memory) {
        uint256 totalItemCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].seller == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToMarketItem[i + 1].seller == msg.sender) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }
}
