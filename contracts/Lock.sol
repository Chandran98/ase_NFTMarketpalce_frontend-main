// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";

contract ASE is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenid; // ID for every nft created
    Counters.Counter private _itemssold; // Need to take the sold item count

    mapping(uint256 => Marketitems) private idToMarketItem;
    address payable owner; // owner address

    uint256 listingprice = 0.0025 ether;

    struct Marketitems {
        // Info about marketitems
        uint256 tokenid;
        address payable seller;
        address owner;
        uint256 price;
        bool issold;
    }

    // infomarketitem is used to send info to frontend
    event infoMarketitem(
        uint256 indexed tokenid,
        address sender,
        address owner,
        uint256 price,
        bool issold
    );
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can access it");
        _;
    }
    modifier baseprice() {
        require(msg.value == listingprice, "Price must be listing price");
        _;
    }

    constructor() ERC721("NFTBOAT", "NFB") {
        owner = payable(msg.sender);
    }

    function updatelisting(uint256 _listingprice) public payable onlyOwner {
        listingprice = _listingprice;
    }

    function Createnft(
        string calldata tokenuri,
        uint256 amount
    ) public payable returns (uint256) {
        _tokenid.increment();
        uint newtokenid = _tokenid.current();

        _mint(msg.sender, newtokenid);
        _setTokenURI(newtokenid, tokenuri);
        createmarketitem(newtokenid, amount);

        return newtokenid;
    }

    // createmarketitem function is used to create nft item by user and transfer the nft from seller to contract
    function createmarketitem(
        uint256 tokenid,
        uint256 amount
    ) private baseprice {
        require(amount == 0, "Price required");

        idToMarketItem[tokenid] = Marketitems(
            tokenid,
            payable(msg.sender),
            payable(address(this)),
            amount,
            false
        );

        //     transfer the nft from seller to contract
        _transfer(msg.sender, address(this), tokenid);

        emit infoMarketitem(
            tokenid,
            payable(msg.sender),
            payable(address(this)),
            amount,
            false
        );
    }

    // resellnft is used to update the price in existing nft.
    function resellnft(uint tokenid, uint amount) public payable baseprice {
        require(
            idToMarketItem[tokenid].owner == msg.sender,
            "You must be the owner of the nft"
        );
        idToMarketItem[tokenid].issold == false;
        idToMarketItem[tokenid].price == amount;
        idToMarketItem[tokenid].seller == msg.sender;
        idToMarketItem[tokenid].owner == address(this);

        _itemssold.decrement();

        _transfer(msg.sender, address(this), amount);
        emit infoMarketitem(
            tokenid,
            payable(msg.sender),
            payable(address(this)),
            amount,
            false
        );
    }

    /// sale nft is used for product sales in market and to transfer the price to owner wallet.
    function salenft(uint256 tokenid) public payable {
        uint256 price = idToMarketItem[tokenid].price;
        require(msg.value == price, "Please check the price amount");
        idToMarketItem[tokenid].owner = payable(msg.sender);
        idToMarketItem[tokenid].issold = true;
        idToMarketItem[tokenid].owner = payable(address(0));

        _itemssold.increment();

        _transfer(address(this), msg.sender, tokenid);
        payable(owner).transfer(listingprice);
        payable(idToMarketItem[tokenid].seller).transfer(msg.value);
    }

    // Unsold nft listing

    function unsoldnft() public view returns (Marketitems[] memory) {
        uint256 itemcount = _tokenid.current();
        uint256 unsoldnftcount = _tokenid.current() - _itemssold.current();
        uint256 currentindex = 0;
        Marketitems[] memory items = new Marketitems[](unsoldnftcount);
        for (uint256 i = 0; i < itemcount; i++) {
            if (idToMarketItem[i + 1].owner == address(this)) {
                uint256 currentid = i + 1;
                Marketitems storage currentitem = idToMarketItem[currentid];
                items[currentindex] = currentitem;
                currentindex += 1;
            }
        }
        return items;
    }

    // Fetch our own NFT collection

    function fetchnft() public view returns (Marketitems[] memory) {
        uint256 totalcount = _tokenid.current();
        uint256 itemcount = 0;
        uint256 currentindex = 0;

        for (uint256 i = 0; i < totalcount; i++) {
            if (idToMarketItem[i + 1].owner == msg.sender) {
                itemcount = i + 1;
            }
        }
        Marketitems[] memory item = new Marketitems[](itemcount);
        for (uint i = 0; i < totalcount; i++) {
            if (idToMarketItem[i + 1].owner == msg.sender) {
                uint256 currentId = i + 1;
                Marketitems storage currentitem = idToMarketItem[currentId];
                item[currentindex] = currentitem;
                currentindex += 1;
            }
        }
        return item;
    }

    // List our NFT collection for sales

    function saleout() public view returns (Marketitems[] memory) {
        uint256 totalcount = _tokenid.current();
        uint256 itemcount = 0;
        uint256 currentindex = 0;

        for (uint256 i = 0; i < totalcount; i++) {
            if (idToMarketItem[i + 1].seller == msg.sender) {
                itemcount = i + 1;
            }
        }
        Marketitems[] memory salesitem = new Marketitems[](itemcount);

        for (uint i = 0; i < totalcount; i++) {
            if (idToMarketItem[i + 1].seller == msg.sender) {
                uint256 currentId = i + 1;
                Marketitems storage currentitem = idToMarketItem[currentId];
                salesitem[currentindex] = currentitem;
                currentindex += 1;
            }
        }
        return salesitem;
    }
}