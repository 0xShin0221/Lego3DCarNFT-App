# About Product

## Lego3DCar - 3DFullonchainNFT

![gif 3d screen](opensea.gif)

Generative 3DNFT Car served fully on-chain implemented with [Three.js](https://threejs.org/).
based on the threejs library deployed with [Roses](https://opensea.io/collection/roses-by-dom)

### Step 1)

Mint from here:
https://lego3d-car-app.vercel.app/

_Max supplied: 100000_

### Step 2)

Configure at Opensea:
https://testnets.opensea.io/account

https://testnets.opensea.io/collection/lego-3d-car

_Testnet Goerli_

# Akindo judge statement

## 課題とアプローチ

### 課題

- ipfs 等の分散型ストレージは、運営元が存在する前提なのでデータの永続性は確保されない

- web3 開発人材(主にスマコンを扱うブロックチェーンエンジニア)がフロントエンジニアの層に比べ少ないが、web3 のコンセプトで活躍できる土俵が色々とあるが情報としての具体性が少ない

### アプローチ

ベースは Roses という dom@dhof さんがブロックチェーン上にデプロイされた webGL などグラフィカルな 3D データをブラウザ上で扱うためのライブラリ three.js を参照し作成しています。

これは、OSS 等のライブラリがブロックチェーン上に保存され分散的にかつ永続性を伴うことでの価値をもたらす一例に過ぎないと考えています。NFT 以外のユースケースとしても、例えば多言語翻訳などのライブラリがブロックチェーン上で保存され利用できるようにもなります。

また、今回の取り組みとして Threejs ベースの 3D フルオンチェーンジェネレーターも制作できることが検証できました。ブラウザベースでインタラクティブに 3D のコーディングを書くだけで、今回の Lego Car のような 3D NFT を制作することができます。フロントエンドやクリエイティブな 3D データを扱う多くの web1,2 エンジニアが web3 とキッカケを持ち価値提供できる機会になると考え取り組みました。

# Tech stacks

- Smart Contract [Hardhat,Foundry,Solidity]

- Application [Next.js,daisyui,threejs,Vercel]

- Blockchain [Ethereum(Goerli)]

# DeployedContract

NFT contract:
0x5B4C18B5c760781bAc268F14B2290Ea2783f7ed0

3D fullonchain render contract:
0x224B71bD7AD700Ee4B7790EedDCACB3e75C676C7

Threejs and scripts related contract:
0xA27ce71ce7D92793404B224d3F31043c7F5Fa15b

0x740E1b93Bf77686B409Adce96341bC4047dA2464

0x248930e364D2B1a0C5b672687080E45e7CaFBB7b

0x03728478F23B6CE057217792A53d9be9eD124e97

0xd4b8AF84DD5C024eB2c0485b27DD5f5266929065

0xa08582200014f3865D61BAF88e12c67CdA023aF9

0x1174727f22A9F80Bc158386BE728Bd81154fa0D8

0x11958611287b1798696d66456a2b5458988822bc

0x6743dBEc9432f098bcB66eAEa7c25Dbece63a2aE

# Code & Links

opensea url:

https://testnets.opensea.io/collection/lego-3d-car-by-0xshin

application url:

https://lego3d-car-app.vercel.app/

github contract url:
https://github.com/sintaro/Lego3DCar-Contract

etherscan contract url:
https://goerli.etherscan.io/address/0x5B4C18B5c760781bAc268F14B2290Ea2783f7ed
