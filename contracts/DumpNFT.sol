//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

contract DumpNFT is ERC721, ERC721Burnable, Ownable {
	constructor(string memory name_, string memory symbol_)
		public
		ERC721(name_, symbol_)
	{}

	function mint(address _to, uint256 _tokenId) public onlyOwner {
		_safeMint(_to, _tokenId);
	}
}
