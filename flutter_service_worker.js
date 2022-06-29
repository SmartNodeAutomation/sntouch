'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "671aaef322567d7e34bd75adbc2a5fa4",
"index.html": "8d10a28bc9257e1b88e38189cbd4c9d8",
"/": "8d10a28bc9257e1b88e38189cbd4c9d8",
"sn_logo.png": "f2624d9aebe6abd1fe9fb13ccde152b9",
"main.dart.js": "72a21de953954b1701e6e20da8886c3c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/sn_icon_192.png": "b5762c6e7c5691cce624d69a85b27c79",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/sn_icon_512.png": "1a5f317c3dd6abf0e623d802a035ee7b",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a8a127e8643d2d12b6013d6da2df86ab",
"assets/AssetManifest.json": "1736d490d4db7d039c6a566758f42f98",
"assets/NOTICES": "c431d9e6de31ab943b5ecbd40b71b98b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/arrow_down_white.png": "9304394f7be37c5508fe65ef141a193e",
"assets/assets/images/AQ3.png": "fd07550fdeb5f98a8aac8f8a228c2fc5",
"assets/assets/images/T1.png": "71069d48db70ae1d601c434ef28c0672",
"assets/assets/images/X2.png": "9d3bc56ff6d62ac333d6465b16bab833",
"assets/assets/images/M3.png": "80d2e275da810fcb7d9d92f3ae7ce37d",
"assets/assets/images/AH1.png": "ebf6eae961e14b2855918e51abac215c",
"assets/assets/images/K.png": "9dae4ec6f2edf9f2a3ece0279cd67351",
"assets/assets/images/AD2.png": "8198add4e10c93ac65fc5ef425a7d2a9",
"assets/assets/images/UUU.png": "1a2a2f0a7c2b29d4db32e3e834d0ef9d",
"assets/assets/images/BW1.png": "7cf741cb0fd6f41d603545b80fc83337",
"assets/assets/images/down3.png": "f9585fa6c0d2bcd12da90c856fcd92f2",
"assets/assets/images/BN3.png": "1ae497cdeef877482427bfb0526a8163",
"assets/assets/images/BB1.png": "76062ca7aaf5519814fd37f30d0d7448",
"assets/assets/images/EEE.png": "1102dcc0baada0c696c9057bd5a33631",
"assets/assets/images/BN2.png": "b093719fa80cf2e50c5faaff0645c523",
"assets/assets/images/down2.png": "9f8008df8185b8d145f471a2c04ffe21",
"assets/assets/images/AD3.png": "dbafca010d7cbba3f729f1c7e0a0022a",
"assets/assets/images/A1.png": "390de75b1d365ff682327542975d61d7",
"assets/assets/images/J.png": "4cc75cf819af566e9512a8334ff8a62e",
"assets/assets/images/M2.png": "8a51cdf82ec1e576361c239fb4b0c0f8",
"assets/assets/images/CD1.png": "59c818ec836a87d68643ec4fae5c29ba",
"assets/assets/images/X3.png": "45639526b6fa43fce56c743ac83de2e0",
"assets/assets/images/AQ2.png": "46f0e4b644c3836fde172e31c010815b",
"assets/assets/images/UU.png": "e73adaf21b84f7d34a801128b104dbe4",
"assets/assets/images/T2.png": "181fdc6a71e3b6925645df5cc57eac60",
"assets/assets/images/arrow_up_grey.png": "a42d8f6f011dc3a92a673320c8638295",
"assets/assets/images/X1.png": "0445c8d8d50490ee6afc0bcf1747900a",
"assets/assets/images/CD3.png": "0fb1047b7218f6c4070a965abdbcbcae",
"assets/assets/images/AH2.png": "b90ca64cf365361b5e206c7ad31b6720",
"assets/assets/images/H.png": "b2213bb8f49373eb7e709c47eeee7bb7",
"assets/assets/images/AD1.png": "f1566559a9e0969ae30fa89445b56900",
"assets/assets/images/A3.png": "1a51afd2ba0edd4d45e148352d968a52",
"assets/assets/images/BW2.png": "81f74c54d17f6bd289b9a6bbe90bf177",
"assets/assets/images/III.png": "cba7722f5cb639341f53edab82d08111",
"assets/assets/images/wood_bg.png": "d8b84c91bd43ac44524cb46451de88d1",
"assets/assets/images/BB3.png": "1884a775559c0598ab3fd72f4daf0cdb",
"assets/assets/images/BB2.png": "4e06fd8509259a90916c9882d32992c3",
"assets/assets/images/BN1.png": "93a6d365e88de07c3c3f76876b35bbc7",
"assets/assets/images/YYY.png": "62b18811cdd8afe05b7aa00e5eaa45f4",
"assets/assets/images/down1.png": "9b377368093143acef1061737cc5c430",
"assets/assets/images/BW3.png": "b49adeea74624dbb4f3918cec362add5",
"assets/assets/images/A2.png": "2a102f9c59c81fb9d5aed9bf5c3783d5",
"assets/assets/images/I.png": "5202eb391497b8f26162919707d783cf",
"assets/assets/images/M1.png": "d209f2853b4d1c75a8d7230d2a3c4e0e",
"assets/assets/images/OO.png": "cf0873c893e25b7ed3e7d364af0fe0bc",
"assets/assets/images/AH3.png": "913f286c4a2fc819526d0af3d63b06a7",
"assets/assets/images/CD2.png": "3513ca422cf5c160b9ce604f6d4755ff",
"assets/assets/images/AQ1.png": "2e4ad044148a078e2113f61405786f10",
"assets/assets/images/T3.png": "7fd7230d9d7a434c1e5abd2766356073",
"assets/assets/images/AP1.png": "a0e181777b98c85b145618ffc3aba5a2",
"assets/assets/images/CI1.png": "6c069559565af26cab383f2c413371a0",
"assets/assets/images/U3.png": "296f498f2bc5d7d5a521d567b0f3db89",
"assets/assets/images/CE2.png": "6aa354cd4644d2484d53796934269d36",
"assets/assets/images/L1.png": "eb3e97a0c22cd8be591e7907b7704b5f",
"assets/assets/images/AI3.png": "2fc2338a9549499df70efa5b39707f3c",
"assets/assets/images/M.png": "32f55b9f3aa22ff9d11ffa2e6d6aa035",
"assets/assets/images/BV3.png": "5cc06adce86c36a8a0ddb9f63350fd09",
"assets/assets/images/arrow_up_white.png": "e3d5c8e5742960dc3cc5d009abc3e5dc",
"assets/assets/images/NNN.png": "c4b55155724e86316f089cfc1c52f6da",
"assets/assets/images/BO1.png": "266d17dd9127401eebed95c14c132b86",
"assets/assets/images/BC2.png": "500a934608abd316f771c97792528956",
"assets/assets/images/sn_logo.png": "029c9d6eca2c47754625ad08ef1dda86",
"assets/assets/images/BC3.png": "f25d11148be5601a6d1b6c40874ab463",
"assets/assets/images/BZ1.png": "85c43e86f30ec8fcc4075f47733915f9",
"assets/assets/images/BV2.png": "528a2e329436242bce4cb831bc72a3b0",
"assets/assets/images/AA.png": "23c198adc4d4a2ee86dfc74bebb90677",
"assets/assets/images/L.png": "bd88bbe8043505a00e191ce019d9b076",
"assets/assets/images/AE1.png": "a12f4025efae741c7735a00ba9829bde",
"assets/assets/images/AI2.png": "36c0a8a6606aa0c790e9b3838126fc68",
"assets/assets/images/NN.png": "a0e1c60281e09a0c6a61cf129c9d72ce",
"assets/assets/images/CE3.png": "8650f1ea4ba4e02908574e35f57df025",
"assets/assets/images/Y1.png": "9efa9d4b1f60086b2ceb0235bdd7ae50",
"assets/assets/images/U2.png": "928959d26d8b66d33159691a053adcf8",
"assets/assets/images/CI2.png": "2f67c1130d6ab1f7c1e8bcc272e10fc2",
"assets/assets/images/AP2.png": "56a49fbc896e4bd027a0048d04763c16",
"assets/assets/images/Y3.png": "61eca4112def862b76802d3c707737cb",
"assets/assets/images/CE1.png": "45b7dcb3d2c3990bf5351dd28f9fa42c",
"assets/assets/images/L2.png": "696a62c2c7bba1b0c18b09011efe7a64",
"assets/assets/images/AE3.png": "5c5ce47929b550a43e92f9849b31db01",
"assets/assets/images/Y.png": "bd09b10f5e6aa6d41aa606e5a21553f4",
"assets/assets/images/N.png": "10c4ea3df419c2dca81a86009b7c937b",
"assets/assets/images/RRR.png": "a9b3f6634351845bb9d95d3656a09dd6",
"assets/assets/images/BZ3.png": "d765fe1cb1f09d53d2125aa7850edd82",
"assets/assets/images/not-allowed-black.png": "eb6981ccd6c9f299d54c55c0f4d6b46d",
"assets/assets/images/BO2.png": "013f9ed58bb18bf6e792d211783898f1",
"assets/assets/images/BC1.png": "a0ce4d908e5aad5383dd96690ab77779",
"assets/assets/images/BBB.png": "871c1bd3661e3fc272046471d8860640",
"assets/assets/images/BO3.png": "1c19028c3b8246277ce00e2a8bd25f7c",
"assets/assets/images/BZ2.png": "11fc04effcf56f2927ae348a1f9a5b2f",
"assets/assets/images/BV1.png": "9c00ac7e07b9b6a73be764a5217a00a0",
"assets/assets/images/O.png": "11269a1f812d80da8b94dab304080789",
"assets/assets/images/X.png": "95f53db72f25be5e5819c19dff19b8e9",
"assets/assets/images/AE2.png": "6962e28ae769ede6d46d51c94f0dc0f8",
"assets/assets/images/L3.png": "d3a01e0c3099820ba97f650057cd4af6",
"assets/assets/images/AI1.png": "790a7049738ed982e5cd28f9fb4e5da9",
"assets/assets/images/Y2.png": "a9aed8c3044acbd2560afba597eb86b8",
"assets/assets/images/AP3.png": "3ab7db1a2c753d8cb56346ea52bcaf84",
"assets/assets/images/TT.png": "e2433a579cd9760c6cd8de3f4cca8cf6",
"assets/assets/images/U1.png": "35ab918a4f48ec717b2402ffd4576068",
"assets/assets/images/CI3.png": "7652322cb8a3bbb051402e821fb55e22",
"assets/assets/images/R2.png": "13120e94b2cb83066b0203aabdf92d1f",
"assets/assets/images/CB3.png": "23384705849f693aaedb469ff3967f87",
"assets/assets/images/AN2.png": "5a90c0825be57f4e344aa4f2b7c1e260",
"assets/assets/images/OOO.png": "f99ad5fda9009f0ba467b7ad753fdf3c",
"assets/assets/images/G3.png": "c15a7e231a7ecb3dd91bac96dfb501ba",
"assets/assets/images/AB1.png": "3f1b9171761dad67c712dd53954e1a9e",
"assets/assets/images/BQ2.png": "bc9e64bda7aab207c4491b70effeef65",
"assets/assets/images/BD3.png": "749d99234744b5a033cec0ca62b220a6",
"assets/assets/images/BD2.png": "b69c4bb71c0fd76e58b891daa1013e6d",
"assets/assets/images/BH1.png": "a18fb617ee174bbf28ebcf1710006d77",
"assets/assets/images/BQ3.png": "cb6549d82dda74d86e74e502bd16d27f",
"assets/assets/images/G2.png": "b23985171ee11c665ca119af12c8f9ef",
"assets/assets/images/AN3.png": "1e0edce749b19f3d8cc8967fa3d1a70e",
"assets/assets/images/K1.png": "f461d2a1274ebbaf29756c8e3934f92d",
"assets/assets/images/CB2.png": "59282790d82bafb2329871771af0de31",
"assets/assets/images/R3.png": "b1bffc001e5d4112f07c5537aa36fc23",
"assets/assets/images/RR.png": "2c273b4e2d7c739db20ee54e67b753b9",
"assets/assets/images/AW1.png": "f0263b81ae39839ed4f2afabf908e02c",
"assets/assets/images/R1.png": "e3a5a23f918453b4d0ba16a8a1ccd85b",
"assets/assets/images/AW3.png": "f63d78ae145630cc4657a3e2e0ad4f0b",
"assets/assets/images/SSS.png": "21eda6ac003cb05942366afe7b5e4894",
"assets/assets/images/AN1.png": "5b9ebc194445ecdd19684a60aef1e8d1",
"assets/assets/images/K3.png": "e8412f7c7db9a25e5c4da806d8f238f9",
"assets/assets/images/AB2.png": "d1cb757a3248fcfd698cdae266844cf6",
"assets/assets/images/BQ1.png": "287f2b8f1576e7e5b0912debaf2d5e22",
"assets/assets/images/BH3.png": "cb0660e597805532f97742de3e3334cd",
"assets/assets/images/BD1.png": "7fe798dd784a5ee2ea000e9c9627469d",
"assets/assets/images/BH2.png": "e3be534bf3a3548eabdeec11e025c584",
"assets/assets/images/G1.png": "9a5be33b50639de44bd810a46079cd2f",
"assets/assets/images/AB3.png": "86c93fa6ab91c5ecdfa50d493d3579f2",
"assets/assets/images/GG.png": "bd96e09ebce7b6facc06ba6d2ac69936",
"assets/assets/images/HH.png": "195c92913ea32585b57394c810f48546",
"assets/assets/images/K2.png": "8405fa4ed218cc53c37189ff7e8ab5e5",
"assets/assets/images/CB1.png": "9715a50c189749dbd0576146d793a430",
"assets/assets/images/AW2.png": "1fba865eb15c9c5d6fc233ebe6e30561",
"assets/assets/images/AV2.png": "9c618c826d2368f606675746183443b8",
"assets/assets/images/AZ1.png": "29292187190861491c1c83065ccb25d1",
"assets/assets/images/CC1.png": "bc74e77946ba9d269bd8d5feb0854122",
"assets/assets/images/J2.png": "73930720274b7f05c32b3275dfed4191",
"assets/assets/images/TTT.png": "070504c307d3faa6818e50d44ca009be",
"assets/assets/images/F1.png": "5cf9c7e02962fa8956415f9060aba925",
"assets/assets/images/AC3.png": "9360b3b5526557fddf50a75642be41f4",
"assets/assets/images/BI2.png": "8732b6d4e2023af3fc441f17aae7acee",
"assets/assets/images/BE1.png": "691a75846ba3e36b84c91c518af6753a",
"assets/assets/images/BI3.png": "497dfc5e02cf38b729b13587c1331289",
"assets/assets/images/BP1.png": "6621f06690bb53e831cdaded3b47d288",
"assets/assets/images/FF.png": "112d5450cc340ba14ee140bb62d2406e",
"assets/assets/images/AC2.png": "c7aa3b98d7e5556fa8cdaacd4359e83a",
"assets/assets/images/AO1.png": "2c7900a1855106563a432faa360f268e",
"assets/assets/images/J3.png": "1621d5c651f6d351d4f5e63d144b9f44",
"assets/assets/images/II.png": "9838663e597ba8e4234b690cdd8bd3a0",
"assets/assets/images/S1.png": "d501d7809a5f84241377d0ecef9643bd",
"assets/assets/images/AV3.png": "c1ef1d4ac69ca1e2d1eed2f429db1ce2",
"assets/assets/images/S3.png": "a15b969e6eb83cfffe28cd40b55bdd25",
"assets/assets/images/AV1.png": "e9562e094ffb48101eb25d66b6265e4c",
"assets/assets/images/CC2.png": "06e969e3180abdcb8c74e8ee893eda44",
"assets/assets/images/AZ2.png": "05fb324566a255571d3e75abf70a83ec",
"assets/assets/images/AO3.png": "1560a0973a454127534621de60d3d543",
"assets/assets/images/J1.png": "d3d99a6c7d9f54d2b7813fd884bcdbfe",
"assets/assets/images/F2.png": "5b9a216a98aafe31e6205cf6fea896a2",
"assets/assets/images/HHH.png": "5a6eb1336fd5c3de2e45209750241dc8",
"assets/assets/images/BP3.png": "d44a5366aee0ae8b03a52c705336db2e",
"assets/assets/images/BI1.png": "96fe3b40e098306f4c9eb7cd72172890",
"assets/assets/images/BE2.png": "4e467ede0e7e9a3387f7392715efb98e",
"assets/assets/images/BE3.png": "d283267abf7677f88ce9d289280bcff9",
"assets/assets/images/BP2.png": "f7aabdf8e6c65c53a1364b6e00b7702c",
"assets/assets/images/F3.png": "2b0c4601feb724df566e3baa9c032dcc",
"assets/assets/images/AC1.png": "af29b8dbb38605f6b6798a898711d4e2",
"assets/assets/images/AO2.png": "c448f5c099f13cac2d2f9308a7552ea6",
"assets/assets/images/AZ3.png": "f580aa2ab60e98f6eaa4040336c58523",
"assets/assets/images/CC3.png": "4ecef5f8819a9719023b6b1afec5b4ff",
"assets/assets/images/XXX.png": "2a1d3cf97bb82eff70c629df58838fc4",
"assets/assets/images/S2.png": "e74599b7562608764787eb5487079259",
"assets/assets/images/SS.png": "33794d6875279306b7dc6ed642598b51",
"assets/assets/images/AU1.png": "cda2b777636def030e672ecca6530d01",
"assets/assets/images/P3.png": "64c1ddb556633ccc861d462029264b72",
"assets/assets/images/AY2.png": "9a81d2efc22e333a76059b109f70d4ff",
"assets/assets/images/I1.png": "4ee480aa13e7adaebf4e7f377888cd16",
"assets/assets/images/AL3.png": "53dbe9e7f39f2340f4d167a78503dd00",
"assets/assets/images/E2.png": "f9bb910528c4878d4ff53483a16eedff",
"assets/assets/images/up2.png": "715fe9f30b607e89b0688f76f12f485b",
"assets/assets/images/BS3.png": "2d75f4508c8aa2617aed68997c940348",
"assets/assets/images/BJ1.png": "6fa42f14f7f372ff41103f5690196bbd",
"assets/assets/images/BF2.png": "efc004088fe3a39942f90bbbf9b2acce",
"assets/assets/images/BF3.png": "0849dc023523e3fdd50fe76fe80aa16a",
"assets/assets/images/BS2.png": "f0194ac7df45e1446b2d6eafba4098be",
"assets/assets/images/up3.png": "eb8e63ccec6b9f71c1c5f9f459b8d0e7",
"assets/assets/images/E3.png": "4d060a2faccef2ef3ce47781fd0cdc33",
"assets/assets/images/EE.png": "7b30ae4f647592911e6168448cc95d39",
"assets/assets/images/AL2.png": "8456af12d13b719d05b804549db14290",
"assets/assets/images/JJ.png": "fa7ebb82a79a75cf03e943b7756bc4c3",
"assets/assets/images/AY3.png": "e30338105e03bf2218e0d951242a5bfa",
"assets/assets/images/MMM.png": "5cd6c3886cd6101c2c8b542eb297ad81",
"assets/assets/images/P2.png": "71d2a01e1a43ce776fb5c40df10ec91e",
"assets/assets/images/AU2.png": "d0140e8216d760598d5e69a933fc0dc5",
"assets/assets/images/AY1.png": "b6010e0199213494ddeaf1e32942609c",
"assets/assets/images/I2.png": "32423a13c209c95ec89e8fde34784691",
"assets/assets/images/AAA.png": "5212fbe13963851522186df2757d0ad1",
"assets/assets/images/E1.png": "c8b398b8c59d5a94f44393b890f0284d",
"assets/assets/images/up1.png": "582de670a1e53a39c30cab4ba7cf69d1",
"assets/assets/images/BJ2.png": "d36d3339ab8acbe5a09bdc9e77b7ab6e",
"assets/assets/images/BF1.png": "92143eaf3a8580d1343e93ce0692c170",
"assets/assets/images/BJ3.png": "b8655cd4a28e8f9c0ec615c39efedff4",
"assets/assets/images/BS1.png": "286b2023476fa48be8b99f905acda6ac",
"assets/assets/images/I3.png": "484935c1f7140609ac79677567ba5726",
"assets/assets/images/AL1.png": "99422206a1a75326f431bebb6afb99d6",
"assets/assets/images/AU3.png": "acc0167673d9542e76cfd45567883f53",
"assets/assets/images/P1.png": "e654b12b8d8b6eab5e9cc6868aa6a4ce",
"assets/assets/images/PP.png": "5c0e3b85a72f8815190af5c4d0ac265c",
"assets/assets/images/QQQ.png": "ecb336d55b932241e6790e442bdf3199",
"assets/assets/images/AT3.png": "2538dcf3c3ad46fa5d4988b5d467f09a",
"assets/assets/images/Q1.png": "92d1f42fc94cc33dde6c5fe57c5f6a46",
"assets/assets/images/H3.png": "174e96c5ed6f1a4b1483f8aa328738ff",
"assets/assets/images/AM1.png": "625c32667124512c518fac42d62c6b38",
"assets/assets/images/AA2.png": "3fdf3f0b608e7ec612005e88ce0d82bf",
"assets/assets/images/FFF.png": "23342f67805c00fbd68a53b1693527d7",
"assets/assets/images/BR1.png": "7cfc85e7f63b0b6dd4fdcdc78a33929a",
"assets/assets/images/BK3.png": "b8104a3d0b24d3de5f89e67820b2c7ef",
"assets/assets/images/BG1.png": "ffaeba89a5c7da5a13e0dd0032b6f72d",
"assets/assets/images/BK2.png": "7a4634032350a7db4bbeaf50e59dc668",
"assets/assets/images/AA3.png": "9177f0a0f9a0880b9a049afd8ed8177d",
"assets/assets/images/D1.png": "c31935495609dc74c2085e44ff145b1b",
"assets/assets/images/H2.png": "7b6b5faa397b4ddb69940b85d7490a27",
"assets/assets/images/CA1.png": "536e5c4f2d053bf825716a36f58f54cf",
"assets/assets/images/AX1.png": "e6b661284b44715076bbf9022a30024b",
"assets/assets/images/QQ.png": "d9c9e0f220fec708c4f0ba9275f2c762",
"assets/assets/images/VVV.png": "eff417d3d79f64af7ac2741b95b8caaf",
"assets/assets/images/AT2.png": "a30534b31bc358ada526b5ecf9884173",
"assets/assets/images/Q2.png": "574446107dd2a0b1ad965ec42d2f42ed",
"assets/assets/images/CA3.png": "d7a6bfeed7a672094e297a12bba426f0",
"assets/assets/images/AX3.png": "f489680e60d42b22398fe16b1a83b883",
"assets/assets/images/AM2.png": "b90508675563cfa2ef5671ace66c68a5",
"assets/assets/images/AA1.png": "d4036d439c240122247c5453c9533af1",
"assets/assets/images/D3.png": "04d38273b9eb9546253d1262a4545014",
"assets/assets/images/BR2.png": "ad1f66446c1f1dc70ce33857a1050d4a",
"assets/assets/images/not-allowed-white.png": "8ec4838512a13fbccf37e3c0ed9ac597",
"assets/assets/images/BG3.png": "30552aa759f5d32aa1a0cabc4e2ce999",
"assets/assets/images/BG2.png": "3db4b94ab002d5b45157a7df4a1d5d98",
"assets/assets/images/BK1.png": "5dbc28eb985cabbd04762379416264fd",
"assets/assets/images/BR3.png": "ce125efc6b0136be054c6bee9fa84416",
"assets/assets/images/D2.png": "f417d0f4c2bb01bb0afe8d886d8fb410",
"assets/assets/images/H1.png": "2b4acb64e7cda2b459268a21ecb3a09b",
"assets/assets/images/KK.png": "4e75930c5fcdef7eb44cccd468d9374c",
"assets/assets/images/AM3.png": "6025f9ed2726611a5170e3646ca2d0d7",
"assets/assets/images/JJJ.png": "262ac5494fe604c2d5ed91a0b8b492d4",
"assets/assets/images/AX2.png": "cf3d4ec4b26b47639f6a8660131e1cdd",
"assets/assets/images/CA2.png": "8c14ed4924a5eb58fa4348e9274164c9",
"assets/assets/images/AT1.png": "8a3da9bbada676f970d0b8e3302a4b59",
"assets/assets/images/Q3.png": "862af72ca62b474846b27ebb69424686",
"assets/assets/images/AS2.png": "0921f63a8a6927afb64b9276c4fb7398",
"assets/assets/images/CJ2.png": "2c8012764085082ea18842d98d1bcd5e",
"assets/assets/images/Z3.png": "2c0332e0e0a2255cbd2404346b9a078b",
"assets/assets/images/CF1.png": "2d1b7a7b253dba00ec3d80bee8c764ac",
"assets/assets/images/O2.png": "cfbb15c2ed8754b5f07980b1acf833bd",
"assets/assets/images/U.png": "8c55e1b3877decf4c5ffb623fef19280",
"assets/assets/images/C1.png": "46dd50feba615a8c462d90db8f96e52c",
"assets/assets/images/B.png": "670cfd7632e715ee1dd9ecf8bb26dd1c",
"assets/assets/images/AF3.png": "67d07556cfbb122fabb1cf07bfb038c6",
"assets/assets/images/GGG.png": "b6302e35b26ba675ebfe29ef863ceae7",
"assets/assets/images/BY3.png": "f33e786aedf1aad8db80b54f403ebcbf",
"assets/assets/images/sn_logo1.png": "d238332dff8669cdf5990f15ba7da346",
"assets/assets/images/BL2.png": "26c1165020f8e0bbed3b46918bcbbd43",
"assets/assets/images/WWW.png": "0a4dc0f68cbc4c9efb62ae3d5f80016e",
"assets/assets/images/BL3.png": "901d01f8fc717159814d3f1cdec2e614",
"assets/assets/images/BY2.png": "6e3488bbfeb4dbd168cbbe830504169f",
"assets/assets/images/BU1.png": "34dbeaf9580a703be49fe89d2ad281c9",
"assets/assets/images/AF2.png": "afe314e0dda61c383153e59b760dbacd",
"assets/assets/images/BB.png": "918a7d07f1b876462266bf8bd9ea3a46",
"assets/assets/images/T.png": "12ea0529261347777104e572511e95f8",
"assets/assets/images/MM.png": "5b3ce513181d1ef894bebd1545b4e2df",
"assets/assets/images/AJ1.png": "877888b14018cc1dca0569b5a0273127",
"assets/assets/images/O3.png": "83de75e527f2e65d25c39e792577be3c",
"assets/assets/images/Z2.png": "c4dc8285bd6ebaa71fe204d72b1974fb",
"assets/assets/images/V1.png": "92c0fda289a4481f594d95501d19b5ea",
"assets/assets/images/CJ3.png": "a208e4889105a63edadaf8f89e0eae28",
"assets/assets/images/AS3.png": "17c712122c17b076130b42098ac3c5bb",
"assets/assets/images/CJ1.png": "8069b107ad7294ca51648a4804418026",
"assets/assets/images/V3.png": "72e2b3a8cbdad64e73c7f6ac0e31c7d9",
"assets/assets/images/AS1.png": "1d4fe312261760621438d9c562e26bd2",
"assets/assets/images/CF2.png": "2f7ea2974cb4ee6f16cc2f3b215d0763",
"assets/assets/images/AJ3.png": "6c0a37659931cc9b7974a841836f212d",
"assets/assets/images/O1.png": "6c9c1bebb6e9353ebc14b7401a8b25ae",
"assets/assets/images/V.png": "5fca14a22a19775fdddd74226c63e470",
"assets/assets/images/C2.png": "98b79f4b018b1d5dd79ac772c4f1ca1a",
"assets/assets/images/A.png": "b7aa3741e6fccba608b34076dd4a6372",
"assets/assets/images/BU3.png": "fe1609d6eb8623c8d0e1b8b295f7cb00",
"assets/assets/images/sn_logo2.png": "cc83b82cf9f966f46c5423e2e08a61e7",
"assets/assets/images/BL1.png": "e39ee52b2261ea7cbc1abeda1ad2317b",
"assets/assets/images/KKK.png": "8ba07ba1caa09b14502d7b4e26d4dec8",
"assets/assets/images/sn_logo3.png": "a12258269619e1567e949939ca4d7fae",
"assets/assets/images/BY1.png": "b6a24d925cf0c62ab82c6ec17844bb5c",
"assets/assets/images/BU2.png": "5456b3b08f201004d4bdb839784eb2f8",
"assets/assets/images/arrow_down_grey.png": "ce511a46a4c31fe01ed3c72ef7236154",
"assets/assets/images/C3.png": "1dc88970705bc61e7a1de94dc6d0f3f9",
"assets/assets/images/AF1.png": "053dfb5ecef0e8dcf5f568e371cdd0ba",
"assets/assets/images/W.png": "71d92485aa12b0c2a96c76be4c124365",
"assets/assets/images/AJ2.png": "0b71c47da4da4a377397ff62d8d36f78",
"assets/assets/images/CF3.png": "fe3b4514a242884394807edb1568937d",
"assets/assets/images/Z1.png": "f4450b17eb10eae7e8f3a0ca9e8e5d97",
"assets/assets/images/XX.png": "0c18fd7bb88d61e1cbda56778202de45",
"assets/assets/images/WW.png": "698c3a478fbc741806f163945c697778",
"assets/assets/images/V2.png": "1bba3b02db64f93f48073be62196eccf",
"assets/assets/images/W2.png": "20a88c5eef02d32efe3ef75dc5b9e154",
"assets/assets/images/CG3.png": "13daab2458642365d0333c00e3f2ff2c",
"assets/assets/images/AK2.png": "44b018b97a6c9660b04f58bb042efcf3",
"assets/assets/images/B3.png": "fd2737d9b769f7dbf0f11460f9467b45",
"assets/assets/images/AG1.png": "15aed5624c0873fe46c0dbfe765109a0",
"assets/assets/images/S.png": "3b5fdf60daee811f312846692e525f76",
"assets/assets/images/BT2.png": "a419b96a4e3a77ea2c0ef44147f45c4d",
"assets/assets/images/BX1.png": "d96519581ac04eb5f31bd76766cfb49e",
"assets/assets/images/BA3.png": "2a01bcc03815e07b68b08830612c1c86",
"assets/assets/images/LLL.png": "d67ae0ca6426d5e7f84308d97d3a62ec",
"assets/assets/images/BA2.png": "5d7d20f65c59d6fc50cf5bdcadfc1751",
"assets/assets/images/BM1.png": "b3ef4728db37407fc01dc0e4c21b8824",
"assets/assets/images/BT3.png": "89c2e3efe346ddd9b7ca1fbb9bd155c1",
"assets/assets/images/R.png": "8705c2cfc7e6ea1fee55cf868e319456",
"assets/assets/images/E.png": "e17bc6d0a13377d5afa227ea5efa8afa",
"assets/assets/images/B2.png": "4f1fc6039838a193045cc8e1b0df32b3",
"assets/assets/images/AK3.png": "cb214e1be378869a7fee07b7d426344a",
"assets/assets/images/N1.png": "456f2c36eeb303ebc1dd79530c33934c",
"assets/assets/images/YY.png": "a031e971f45b586f2381fb5b3b2e074e",
"assets/assets/images/CG2.png": "3a67d8d580d1dc970fad190adaed5c9d",
"assets/assets/images/W3.png": "60e95a1652b39a0704e94cd85606f152",
"assets/assets/images/AR1.png": "f6423171994d9d26bf7f1e8e465fd7f6",
"assets/assets/images/VV.png": "7b713c8469c31d01d794d6c6b12aed88",
"assets/assets/images/W1.png": "e27efc7f2a4eb38ce89ab865d659a5e1",
"assets/assets/images/AR3.png": "833b864e6e5bc9456e98a78138bffd1f",
"assets/assets/images/AK1.png": "68a39c71583e6b2204c5dfd65a028eac",
"assets/assets/images/N3.png": "1feadf7e76d3baba727af0c26213afd3",
"assets/assets/images/AG2.png": "52312758054d889f5b007b137363ddfc",
"assets/assets/images/G.png": "36eb8251b937acc9f7a6a18284d4ff96",
"assets/assets/images/P.png": "6ec83460bbef8ff293286cb4ba09b30e",
"assets/assets/images/BT1.png": "e8016e1fc0480dfa9f5d3c71a2aac933",
"assets/assets/images/BX2.png": "b2f9aee5eaa0a977ad84200b3c1700c8",
"assets/assets/images/BM3.png": "d1ee1cecdb887537db8e04df70232914",
"assets/assets/images/BA1.png": "bf19ea7f111d5412f240c4843919d98c",
"assets/assets/images/PPP.png": "da854539482684737c74772d58f550ec",
"assets/assets/images/BM2.png": "16571ef53911a6b4a50250d7f414b683",
"assets/assets/images/BX3.png": "3397db0f8ded4ab3b8cc1769ecbd3414",
"assets/assets/images/Q.png": "3e662fb35487cc0e52828ecdbd8972a5",
"assets/assets/images/B1.png": "b104de50e888b0e122e4f01071120631",
"assets/assets/images/F.png": "930e964e3c308aae98350fdd4d5e4f75",
"assets/assets/images/AG3.png": "d807c5263a85a03d6fb979c88a135cfe",
"assets/assets/images/not-allowed-grey.png": "87ebe4f6b4e74d38c97ebb605fc8be05",
"assets/assets/images/N2.png": "ccb302db1755f281aad69a630c09dcdf",
"assets/assets/images/LL.png": "dabe90da646d6b616ea3f1cde2a8c7b5",
"assets/assets/images/CG1.png": "b61dcd31b3924f37d49ef27402829132",
"assets/assets/images/AR2.png": "25c2e05ccc45aaf8e175adaaf92251c2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
